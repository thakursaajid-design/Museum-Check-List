# Museum Check List

Read-only online viewer for the Museum exhibits daily checklist.

**Live site:** https://thakursaajid-design.github.io/Museum-Check-List/

## How it works

- The Excel file (`Museum_Check_List.xlsx`) is hosted in this repository.
- The website loads the Excel file in the browser and displays it as clean, scrollable tables (one tab per month/sheet).
- Viewers **cannot edit** the data — it is view-only.
- When you update the Excel file and push the changes to GitHub, the website automatically shows the new data.

## How to update the checklist

1. Edit `Museum_Check_List.xlsx` on your computer (Excel / Google Sheets / LibreOffice).
2. Replace the file in this repository:
   - Upload the new version via GitHub website, **or**
   - Use git:
     ```bash
     git add Museum_Check_List.xlsx
     git commit -m "Update checklist - [date]"
     git push
     ```
3. Wait 10–60 seconds for GitHub Pages to update. Refresh the website.

## Setup (already done if you uploaded these files)

1. Create a new **public** repository named `Museum-Check-List` under the account `thakursaajid-design`.
2. Upload / push these files:
   - `index.html`
   - `Museum_Check_List.xlsx`
   - `README.md` (optional)
3. Go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch**.
5. Choose branch `main` (or `master`) and folder `/ (root)`.
6. Save. After a minute the site will be live at:
   `https://thakursaajid-design.github.io/Museum-Check-List/`

## Features

- Tab switching between months (September / October / future sheets)
- Sticky header + sticky first three columns (No. / Exhibit / Server)
- Color coding for status values (OK, Failed, Hang, Connectivity, Not Respond)
- Download button for the original Excel file
- Mobile-friendly horizontal scroll
- Automatic cache-busting so latest Excel is always loaded
