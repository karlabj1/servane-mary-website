# Password-Protected Artworks Page

## Current Password

The password for the Works page is: **servane2024**

## Accessing the Works Page

1. Click on "Works" in the header navigation (next to "Info")
2. Enter the password: `servane2024`
3. Click Submit

The password is saved in your browser session, so you won't need to enter it again until you close the browser.

## Changing the Password

To change the password, edit the file:
`src/components/password-protected.js`

Find this line:
```javascript
const PasswordProtected = ({ children, correctPassword = "servane2024" }) => {
```

And change `"servane2024"` to your new password.

After changing the password:
1. Save the file
2. The development server will automatically reload
3. The new password will take effect immediately

## How It Works

- The password is checked in the browser (client-side)
- Authentication is stored in `sessionStorage` (lasts until browser is closed)
- The password protects the `/artworks` page which displays work thumbnails by year
- Individual artwork detail pages (`/works/[slug]`) remain accessible if someone has the direct link

## Security Note

This is a basic password protection suitable for keeping casual visitors out. For stronger security, consider implementing server-side authentication or using a service like Netlify's password protection feature.

