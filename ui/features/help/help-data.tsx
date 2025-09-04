import { COMPANY_NAME } from 'src/config/company'
import { Article } from './help.type'

const testArticle = `
<h2>How to contact us</h2>
<p>You can reach us at the “support button”, at the top right of any page. You can also navigate to our footer where you can email us, call us and see our address. </p>
<p>Our English line is open from 9 AM CET to 11 PM CET. If you need help in a language other than English, you can reach us in our support chat, at any hour of the day.</p>
  `

const testArticle2 = `
  <h2>My trip (or a part of it) has been canceled</h2>
<p>If your transport gets canceled, we'll tell you once we know. You can pick a new route from your account or get a refund. If you're already traveling or at the airport and haven't heard about a cancellation, please reach out to us.</p>
<h2>Can I cancel with the carriers directly?</h2>
<p>If you cancel your ticket directly with the transport carrier, you might not always get a refund due to different policies. If the transport carrier refunds to our account, tell us. We'll send it to you unless you've asked us for a refund already.</p>
`

const testArticle3 = `
<h2>Adding baggage</h2>
<p>You can add baggage when you book the trip, or later in your account. This is possible up to 24 hours before your trip.

The price depends on the carriers and the conditions of each booking. You’ll always see it next to each baggage option. 
It's generally cheaper to add baggage during booking because most carriers increase the price later. Depending on your service package, we might also charge a processing fee for additional services added later.
Changing baggage
Once you add baggage, it’s not possible to transfer it to another passenger or remove it. However, it might be possible to upgrade to more pieces or kilos if this is offered by the carriers in your booking.</p>

<h2>Baggage allowance</h2>
<p>Baggage breaks down into 3 main categories: checked baggage, cabin baggage, and personal items. 

The amount and type of baggage you can bring depends on the carrier — some allow free checked and cabin baggage, while others only offer a single personal item. 
If you have a booking, you can find your baggage allowance in “manage my booking”. </p>

`

const testArticle4 = `
<h2>What do I need to do?</h2>
<p>The only information we require from you is the necessary travel document details requested by transportation providers. Usually, this is just your passport or national ID number and its expiration date. If you haven’t provided these yet, please go to the <a href="/manage-booking">manage booking</a> page and follow the instructions.</p>

<h2>When will I receive my boarding pass?</h2>
<p>Most transportation providers open their online check-in services approximately 24 hours before departure. Once they do, our automatic check-in service will process your check-in and send your boarding pass directly to you.</p>

<p>We will notify you immediately by email, and you’ll also be able to find your boarding pass on the <a href="/manage-booking">manage booking</a> page.</p>

<h2>What if check-in fails?</h2>
<p>In rare cases where automatic check-in with the transportation provider isn’t possible, you’ll receive instructions on how to check in manually at the airport. This will typically involve providing your last name or email along with a PNR number.</p>

<p>Please note that some transport carriers charge an additional fee for manual check-in at the desk. If the issue is on our end, please contact support so we can refund the fee.</p>
`

const testArticle5 = `
<h2>Passport/National Identification</h2>
<p>It is always required to travel with your country's official photo identification. This is typically a passport, although in some cases, a driver's license may suffice. Always ensure that you check the identification requirements of the destinations included in your itinerary before you depart.</p> <p>To facilitate automatic check-in, you will usually be asked to provide these details on the <a href="/manage-booking">manage booking</a> page.</p>

<h2>Visa or Transit Visa</h2>
<p>If any of the countries on your itinerary require a visa, you will generally need to present it at the airport during check-in, security screening, or immigration. You do not need to enter visa information when checking in online, but you may still be required to show your visa at the check-in counter upon arrival at the airport. Certain transport carriers may issue a "temporary boarding pass," which will be exchanged for the official boarding pass once your visa has been verified. If this is necessary, it will be indicated on the temporary document.</p>

<p>We always recommend checking visa requirements by contacting the relevant embassies or visiting the official websites of all the countries included in your journey before departure. Chiri.pk accepts no responsibility for any visa-related issues.</p>

<h2>Health Documents</h2>
<p>Requirements for health and travel documents vary based on your itinerary, including destination, point of departure, and transport carrier policies. In some instances, you may be asked to complete an entry form, present a general health certificate or proof of vaccination, or simply confirm that you are aware of the applicable regulations.</p><p>COVID-19 documentation is an example of such requirements, however, it is increasingly rare for it to be mandatory in many countries anymore. Nevertheless, always verify whether there are specific requirements for your destinations.</p>
`

const testArticle6 = `
  <h2>How it works</h2>
  <p>If seat selection is available with a transport provider, you can choose your seat either during booking or before completing check-in through the marketplace for an additional fee. If seat selection isn’t available, a seat will be assigned to you at check-in at no extra cost.</p>
  <p>Please note that we currently offer only “Window seat” and “Sit together” options. If these are available through the transport carrier, we will select them by default. For other specific seating preferences, please feel free to contact us.</p>
  <p>Once you’ve booked, your selected seats will appear on your boarding passes when check-in is complete.</p>
  
  <h2>Choosing a seat after booking</h2>
  <p>You can purchase seats even after booking. To do this, log in with your trip details at <a href="/manage-booking">Manage booking</a> and visit the Trip Marketplace. When check-in are not completed, you’ll have the option to add seats through the marketplace for a small fee.</p>
`

const testArticle7 = `
<h2>What Makes Chiri.pk Unique?</h2>
<p>Traveling should be exciting, not stressful. Yet, planning a trip can often feel overwhelming—comparing countless flights, finding the best prices, booking hotels, and ensuring everything aligns perfectly. At Chiri.pk, we do the hard work for you. Our AI-driven platform scans millions of routes, airlines, and accommodations to create seamless, optimized trips tailored to your preferences. No more endless searching or second-guessing; we combine flights, hotels, and even unique travel experiences into one simple itinerary.</p>

<p>What truly sets Chiri.pk apart is our ability to create dynamic trips that wouldn’t be possible through traditional search engines. By combining different airlines and routes that aren’t typically sold together, we unlock better prices and more flexible travel options. Whether you’re planning a weekend getaway or a multi-city adventure, our technology ensures that you get the most efficient and cost-effective journey.</p>

<p>Another key differentiator is our commitment to automation and convenience. We provide <a href="/help/automatic-and-manual-check-in">automatic check-in</a> for free on all flights, meaning you won’t have to worry about remembering to do it yourself. Your boarding passes are sent directly to you, so you can skip the hassle and focus on your trip.</p>

<h2>Effortless Travel, From Start to Finish</h2>
<p>Booking your trip is just the beginning. With Chiri.pk, managing your journey is just as smooth. Need extra baggage or a specific seat? Our integrated <a href="/help/how-to-add-baggage-seatings-and-extras">marketplace</a> allows you to add these extras with ease. Changes to your itinerary? Our <a href="/help/customer-support">24/7 customer support</a> team is always available to assist you. We’ve designed every part of the experience to be seamless, from the moment you start searching to the day you return home.</p>

<p>At the core of Chiri.pk is our love for travel. We built this platform because we believe exploring the world should be effortless, affordable, and enjoyable. Traditional booking platforms focus on transactions—our focus is on creating journeys. Our technology ensures you’re getting the best deals without the stress, so all you need to worry about is where you’ll go next.</p>

<p><i>There's always a reason to go.</i></p>

`

const testArticle8 = `<h2>How to Book at Chiri.pk – A Simple and Seamless Process</h2>

<p>At Chiri.pk, we believe booking your trip should be as easy as the journey itself. Our intuitive platform allows you to find and purchase flights, accommodation, and other travel essentials in just a few clicks. Whether you're planning a quick weekend escape or a multi-city adventure, we make the process fast, secure, and hassle-free. Here’s a detailed guide to help you complete your booking smoothly.</p>

<h2>Finding and Selecting Your Ideal Trip</h2>

<p>Start by entering your destination, travel dates, and any other preferences. Our advanced search engine scans millions of flight, bus and train routes, accommodations, and travel options to present you with the best choices. We even combine routes and airlines that traditional platforms can't, giving you access to better prices and more flexible itineraries.</p>

<p>Once you’ve found the perfect trip, simply click through to the checkout. Our platform is designed to minimize the time and effort required, allowing you to complete your booking without navigating through complicated steps.</p>

<h2>Providing Essential Details for Your Trip</h2>

<p>After selecting your trip, you’ll be prompted to enter the necessary information to process your booking. This is divided into two parts:</p>

<ul>
    <li><strong>Contact Information:</strong> Provide your email address and phone number. We use this information to send you important updates, including your booking confirmation and any changes to your trip.</li>
    <li><strong>Passenger Details:</strong> Enter the names and relevant information for all travelers. This step ensures that your flights and accommodations are accurately booked. If your trip includes flights, this is also where you can add extra baggage if needed. A personal bag is always free to bring, and additional luggage options will be displayed if available.</li>
</ul>

<p>It’s crucial to double-check this information before proceeding. Accurate details help us ensure smooth communication and prevent any issues during check-in or travel.</p>

<h2>Customizing Your Experience</h2>

<p>We understand that every traveler is unique, which is why we offer several options to personalize your trip. If seat selection is available for your flight, you can choose your preferred seat—whether you want a window view, to sit together with your travel companions, or you’re comfortable with random allocation. This flexibility allows you to tailor your journey to your preferences.</p>

<p>For added peace of mind, we also offer <strong>Chiri.pk Flex</strong>, a flexible travel insurance option. With Chiri.pk Flex, you can receive 80% of your trip cost back if you need to cancel. This feature gives you the freedom to book confidently, knowing that your plans can change without significant financial loss.</p>

<h2>Secure Payment and Booking Confirmation</h2>

<p>When you’re ready to finalize your trip, we offer a variety of secure payment options tailored to your location. All transactions are encrypted to protect your personal and financial information. Once the payment is successfully processed, you will receive an email confirmation along with a notification guiding you to your booking details.</p>

<p>After booking, you can access your itinerary through our <a href="/manage-booking">Manage booking</a> section. Here, you can review your trip, make changes, or add extras such as baggage or seat preferences. For more guidance, you can visit our <a href="/help/how-to-add-baggage-seatings-and-extras">help page on adding extras</a>.</p>

<p>It’s worth noting that some orders may display a status of “issuing” for a short time. This means the booking is being processed and will be confirmed once the airline or accommodation provider has finalized the purchase.</p>

<h2>Need Help? We’re Here for You</h2>

<p>We’re committed to making your travel experience as smooth as possible. If you have questions or need assistance at any stage, our <a href="/help/customer-support">customer support team</a> is available to help. Whether it’s managing your booking, adding extras, or addressing concerns
`

const testArticle9 = `
<h2>Cashback on your trips</h2>
<p>When you book through Chiri.pk, you can earn cashback in the form of Chiri.pk Coins. These are automatically added to your account after each eligible purchase when you're logged in. To earn Coins, make sure you're logged into your Chiri.pk account before completing a booking. It can take up to 24h to receive the coins through your profile. To see your current amount of coins please go to your profile, and check the rewards.</p>

<h2>What are Chiri.pk Coins worth?</h2>
<p>100 Chiri.pk Coins are approximately equal to 10 EUR. The value can vary slightly depending on how the coins are used, but you’ll always see the exact discount during checkout.</p>

<h2>How to use Coins</h2>
<p>You can redeem your Chiri.pk Coins at checkout. If your balance is high enough, you’ll be able to apply a discount to your booking, including flights, accommodation, gift cards, and more. Just select the option to use your Coins during payment.</p>

<h2>More travel, more savings</h2>
<p>The more you book, the more Coins you earn — and with continued use, you may unlock higher cashback rates or additional offers in the future. Coins can only be used on Chiri.pk and are non-transferable.</p>
`

let article = {
  title: 'Customer support',
  slug: 'customer-support',
  description:
    'Here you can find how to contact us. Our team will do our best to assist you in any issue you may have. ',
  content: testArticle,
  relatedArticles: [],
}
let article2 = {
  title: 'Changes of bookings',
  slug: 'how-to-make-changes-to-bookings',
  description:
    'Sometimes it happens that a flight, bus, train or ferry gets canceled by the carrier. This happens very rarely, but we always do our best to help you.',
  content: testArticle2,
  relatedArticles: [
    {
      title: article.title,
      description: article.description,
      slug: article.slug,
    },
  ],
}

let article3 = {
  title: 'Baggage, seating & extras',
  slug: 'how-to-add-baggage-seatings-and-extras',
  description:
    'We always allow options to customize the trips for your needs. If you have any preferences for baggage, seating or other extras we are here to help you out.',
  content: testArticle3,
  relatedArticles: [
    {
      title: article2.title,
      description: article2.description,
      slug: article2.slug,
    },
    {
      title: article.title,
      description: article.description,
      slug: article.slug,
    },
  ],
}

let article4 = {
  title: 'Automatic and Manual Check-In',
  slug: 'automatic-and-manual-check-in',
  description:
    'We will automatically check you in free of charge and send your boarding passes, so you don’t need to do anything yourself.',
  content: testArticle4,
  relatedArticles: [],
}

let article5 = {
  title: 'Required documents for traveling',
  slug: 'required-documents',
  description:
    'When checking in at the airport, there are often specific security requirements to consider. Below is a list of the most common documents that may be necessary for your journey.',
  content: testArticle5,
  relatedArticles: [],
}

let article6 = {
  title: 'Seat selection',
  slug: 'seat-selection',
  description:
    'Certain transport companies charge a fee if you want to choose a specific seat. However, if you don’t mind where you sit, you can skip this fee and receive a randomly assigned seat free of charge during check-in. ',
  content: testArticle6,
  relatedArticles: [],
}

let article8 = {
  title: 'Booking process',
  slug: 'booking-process',
  description: `We aim to make travel effortless. Our streamlined booking process lets you plan and purchase your entire trip in just a few clicks.`,
  content: testArticle8,
  relatedArticles: [
    {
      title: article.title,
      description: article.description,
      slug: article.slug,
    },
  ],
}

let article9 = {
  title: 'Coins Cashback',
  slug: 'loyalty-coins',
  description: `Sign in to earn cashback on every booking. Use it for discounts on future trips, giftcards, accommodation and much more,`,
  content: testArticle9,
  relatedArticles: [
    {
      title: article.title,
      description: article.description,
      slug: article.slug,
    },
  ],
}

let article7 = {
  title: 'How it works',
  slug: 'how-it-works',
  description: `Explore what makes ${COMPANY_NAME} unique and how we simplify everything from start to finish on your dream vacation. There's always a reason to go.`,
  content: testArticle7,
  relatedArticles: [
    {
      title: article8.title,
      description: article8.description,
      slug: article2.slug,
    },
    {
      title: article.title,
      description: article.description,
      slug: article.slug,
    },
  ],
}

export const articles: Article[] = [
  article,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
]
