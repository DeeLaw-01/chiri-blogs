/**
 * This entire collection of functions is based on the Amplify Authentication docs:
 * https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/
 * They're not great, but it's what we have.
 *
 * Also, the frontend setup for manual auth flows with Amplify:
 * https://docs.amplify.aws/lib/auth/social/q/platform/js/#setup-frontend
 *
 * Also, this blogpost:
 * https://medium.com/codex/how-to-process-an-aws-cognito-authorization-code-grant-using-aws-amplify-b49d9ee052ca
 * Again: Questionable source, but a source none the less.
 */

import { Auth } from 'aws-amplify'
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'
import { getUserId, setCognitoUserId } from 'src/utils/userIdHelper'

/**
 * Signs into their account using Cognito.
 * @param {*} username in the form of an email address
 * @param {*} pw the user's password.
 */
const SignIn = async (username, pw) => {
  try {
    storeCurrentRouteInSesion()
    await Auth.signOut() // Might not be needed, we've just previously had issues when signing in without clearing current users
    const doSignIn = await Auth.signIn(username, pw)
    setCognitoUserId()
    return doSignIn
  } catch (error) {
    console.warn('error signing in :(', error)
  }
}

/**
 * Sign in as an authenticated user, using the OAuth codegrant that our federated signin workflows (e.g., Facebook) produce.
 * The code is completely an totally borrowed from https://medium.com/codex/how-to-process-an-aws-cognito-authorization-code-grant-using-aws-amplify-b49d9ee052ca
 * @param {*} url containing the code after a signin redirect, e.g.: https://tryp.com/da?code=xxxxxxxxxxxxxxx
 */
const signInFromOAuthCodeGrant = (url) => {
  try {
    // Slightly hacky, since the oAuthHandler is technically a private function in the Auth library.
    Auth._oAuthHandler.handleAuthResponse(url).then((resp) => {
      // create a CognitoAccessToken using the response accessToken
      const AccessToken = new AmazonCognitoIdentity.CognitoAccessToken({
        AccessToken: resp.accessToken,
      })

      // create a CognitoIdToken using the response idToken
      const IdToken = new AmazonCognitoIdentity.CognitoIdToken({
        IdToken: resp.idToken,
      })

      // create a RefreshToken using the response refreshToken
      const RefreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({
        RefreshToken: resp.refreshToken,
      })

      // create a session object with all the tokens
      const sessionData = {
        IdToken: IdToken,
        AccessToken: AccessToken,
        RefreshToken: RefreshToken,
      }

      // create the CognitoUserSession using the sessionData
      const session = new AmazonCognitoIdentity.CognitoUserSession(sessionData)

      // create an object with the UserPoolId and ClientId
      let poolData = {
        UserPoolId: Auth.userPool.userPoolId,
        ClientId: Auth.userPool.clientId,
      }

      // pass the poolData object to CognitoUserPool
      let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

      // create an object containing the username and user pool.
      // You can get the username from CognitoAccessToken object
      // we created above.
      let userData = {
        Username: AccessToken.payload.username,
        Pool: userPool,
      }

      // create a cognito user using the userData object
      let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

      // set the cognito user session w/ the CognitoUserSession
      cognitoUser.setSignInUserSession(session)

      // get the Amplify authenticated user
      Auth.currentAuthenticatedUser()
        .then(() => {})
        .catch(() => {})
    })
  } catch (error) {
    console.warn(error)
  }
}
/**
 * Signs out the currently signed in user.
 * Can be set as a global sign out via the requestGlobalSignOut parameter.
 * @param {*} requestGlobalSignOut boolean describing whether the sign out should be global (across all devices).
 * The parameter defaults to false.
 */
const SignOut = async () => {
  try {
    storeCurrentRouteInSesion()
    await Auth.signOut()
  } catch (error) {
    console.warn('error signing out: ', error)
  }
}

/**
 * Use a social provider (Facebook, Google, etc.) to sign up / sign in. Follows a federated sign-in/sign up workflow,
 * where the user is brought to the "Continue with Facebook" page automatically,
 * and then redirected to our site after approving.
 *
 * Provider must be a valid member of the CognitoHostedUIIdentityProvider enum (imported from '@aws-amplify/auth').
 *
 * We currently support auth through Facebook and Google, meaning that the provider must be either 'Facebook' or 'Google'.
 *
 * @param {CognitoHostedUIIdentityProvider} provider the social signin provider. Must be either 'Google' or 'Facebook'.
 */
const socialSignIn = async (provider) => {
  try {
    storeCurrentRouteInSesion()
    const user = await Auth.federatedSignIn({
      provider: provider,
    })
    setCognitoUserId()
    return user
  } catch (error) {
    console.warn(error)
  }
}

/**
 * Sign user up for an account.
 * @param {*} email Email of the user (used to confirm user and as a "username" for the account)
 * @param {*} pw password for user account.
 * @param {*} name the name of the user.
 */
const signUp = async (email, pw, name, locale) => {
  try {
    const { user } = await Auth.signUp({
      email: email,
      username: email,
      name: name,
      password: pw,
      attributes: {
        name,
        'custom:user_type': 'standard', //The custom attribute describing what type the user is. From the FE signup, this will always be "standard"
        'custom:user_id': await getUserId(), //Custom attribute containing the userId at signup time
        'custom:locale': locale, // Custom attribute for the user locale
      },
      autoSignIn: {
        enabled: true,
      },
    })
    return user
  } catch (error) {
    console.warn('error signing up:', error)
  }
}

/**
 * Function used to confirm the email address of the user, via a code sent to them upon signUp.
 * @param {*} email email used to sign up
 * @param {*} confirmationCode confirmation code sent to email post signup
 */
const confirmSignUp = async (email, confirmationCode) => {
  try {
    await Auth.confirmSignUp(email, confirmationCode)
  } catch (error) {
    console.warn('error confirming sign up', error)
  }
}

/**
 * Resend the confirmation code to the user
 * @param {*} email used to sign up
 */
const resendConfirmationCode = async (email) => {
  try {
    await Auth.resendSignUp(email)
  } catch (err) {
    console.warn('error resending code: ', err)
  }
}

/**
 * Change the password of a currently logged in user
 * @param {*} oldPW old password
 * @param {*} newPW new password
 */
const changeUserPassword = async (oldPW, newPW) => {
  await Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, oldPW, newPW)
    })
    .then(() => null)
    .catch((err) => console.warn(err))
}

/**
 * This will cause Cognito to send a confirmation code to the users email,
 * which we will need in a follow-up step to change to a new password
 * @param {*} username
 */
const initiateForgotPassword = async (username): Promise<any> => {
  return await Auth.forgotPassword(username)
    .then((data) => {
      return data
    })
    .catch((err) => console.warn(err))
}

/**
 * Allows user to change to a new password, using the confirmation code they
 * received in their email upon triggering initiateForgotPassword()
 * @param {*} username
 * @param {*} forgotPasswordConfirmationCode the code from the email
 * @param {*} newPW new password
 */
const completeForgotPassword = async (
  username,
  forgotPasswordConfirmationCode,
  newPW
) => {
  return await Auth.forgotPasswordSubmit(
    username,
    forgotPasswordConfirmationCode,
    newPW
  )
    .then((data) => {
      return data
    })
    .catch((err) => console.warn(err))
}

/**
 * Stores the current window path, to redirect the user back to their previous destination after either signing in or out.
 */
const storeCurrentRouteInSesion = () => {
  sessionStorage.setItem('routeTo', `${window.location.href}`) // for routing user back to where they came from post signin
}

export {
  signUp,
  SignIn,
  SignOut,
  confirmSignUp,
  socialSignIn,
  resendConfirmationCode,
  changeUserPassword,
  initiateForgotPassword,
  completeForgotPassword,
  signInFromOAuthCodeGrant,
}
