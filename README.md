# Paul & Roy's Men's Group | SCG Live Differently

A lightweight, mobile-responsive single-page website created to keep our SCG Church Discipleship group updated on curriculum, serving opportunities, and our weekly meeting schedule.

## 🚀 Features

* **Automated Schedule Highlighting:** Uses vanilla JavaScript to automatically check the current date against the schedule table (`data-date`), highlighting the very next upcoming meeting row in teal.
* **Mobile-Friendly Design:** Built with CSS Flexbox and responsive table wrappers to ensure the schedule is easily readable on both desktop and mobile devices.
* **Custom Alert Banner:** A prominent alert box at the top of the page for urgent updates (currently highlighting the Fast & Good Friday service).
* **Clean Typography:** Uses embedded Google Fonts ('Bebas Neue' and 'Montserrat') to match SCG branding and flyers.

## 🛠️ Tech Stack

* HTML5
* CSS3 (Custom variables for unified branding)
* Vanilla JavaScript

## 📝 How to Update the Schedule

To change a meeting topic, update who is giving their testimony, or who is bringing snacks, you will need to edit the `index.html` file. 

1. Open `index.html` and scroll down to the `<tbody>` section.
2. Locate the row (`<tr>`) you want to update. 
3. Edit the text inside the table data (`<td>`) tags. 

**Example Row:**
```html
<tr data-date="2026-05-10">
    <td>5/10</td>
    <td>Week 8: 10 Commandments</td>
    <td>Bryan</td>
    <td>Bryan</td>
</tr>
