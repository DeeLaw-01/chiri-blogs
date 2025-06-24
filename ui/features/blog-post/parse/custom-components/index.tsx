import { CustomBlogComponent } from '../types/blog-post.type'
import EmailSignup from './email-signup'
import TripSuggestions from './trip-suggestions'

type CustomComponentsProps = {
  children: string | JSX.Element | JSX.Element[] | undefined
}

export default function CustomComponents({
  children,
}: CustomComponentsProps): JSX.Element {
  if (!children || typeof children !== 'string') return <></>

  // EMAIL SIGNUP COMPONENT
  if (children.includes(CustomBlogComponent.emailsignup)) {
    return <EmailSignup />
  }

  // TRIP SUGGESTIONS COMPONENT
  if (children.includes(CustomBlogComponent.tripsuggestions)) {
    const query = children.split(':')[1]
    return <TripSuggestions query={query} />
  }
  return <></>
}
