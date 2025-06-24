import { setCognitoUserId } from 'src/utils/userIdHelper'
import { isProduction } from './environments'
import { Amplify } from 'aws-amplify'

/**
 *
 * Makes the needed Amplify Auth configuration for user profile signin
 */
const configCognitoOAuth = (): void => {
  // Authentication and OAuth config
  Amplify.configure({
    Auth: {
      region: 'eu-central-1',
      userPoolId: isProduction
        ? 'eu-central-1_eajHlwBgn'
        : 'eu-central-1_wy7Ud5IgP',
      userPoolWebClientId: isProduction
        ? 'v67ph2to6udthcdd2cinkgdm4'
        : '6d6bfsmer2hbnlarb88vn9febk',
      identityPoolId: isProduction
        ? 'eu-central-1:df609ec2-f8a1-46ef-80a6-b46ed4d0d1c2'
        : 'eu-central-1:3fab8e86-ce7e-44cc-9d8e-bfded3d807f8',
      oauth: {
        domain: isProduction
          ? 'auth.tryp.com'
          : 'tryp-com-test.auth.eu-central-1.amazoncognito.com',
        scope: ['email', 'openid', 'phone', 'aws.cognito.signin.user.admin'],
        redirectSignIn: `${window.location.origin}/auth`,
        redirectSignOut: `${window.location.origin}/auth`,
        responseType: 'code',
      },
    },
  })

  // set the cognito user id in the session storage
  setCognitoUserId()
}

export default configCognitoOAuth
