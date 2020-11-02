# Lab 4 by Kiryl Volkau
* To run the app in the dev mode do: `yarn start` or `npm start`.
### How it all works together (step-by-step):
1. You open the page and see `Name step` form.
2. You enter what is asked (there is a validation for each input, email is done with regex).
3. If it is valid then you can click `Next button`. After that the `Name step` is visually and functionally disabled.
4. Same happens for the `Address step`, with several differences:
    1. You can click `Back` button anytime and hide address step, activating the name step.
    2. If you click checkbox it will disable both visually and functionally `Invoice address` part of the form and will fill it (on the go, as you change) with values from `Delivery address` part.
5. After you click `Next` button on the address form the `Summary step` is shown with possibility to go back one or two step before (meaning: hide the steps went back and enabling step went to both visually and functionally).
