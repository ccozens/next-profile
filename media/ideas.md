# Ideas


- static gradient background
- dark?
- favicon
- link transitions? https://css-tricks.com/css-link-hover-effects/

# From syntax highlights 7 Jul 21
https://cudd.io/

- animation for software engineer appearing on load
- simple bottom right nav
- blurred background with name + photo sharp. Photo has gradient border.
- nav - transition on each object so highlight and underline scrolls across on hover
- about page - card + bio, tech stack
- projects as cards (heading should be h3 or h4)

walterjenkins.com

- like tags on blog, though no way to filter by tag

https://suhit.me/

- they lover the [inter font](https://fonts.google.com/specimen/Inter)
- gh/li logos have slight tilt on hover
	=> 
	
	```css
	div:hover {
  		transform: rotate(5deg);
	}
	```
- [gh readne(https://github.com/SuhitAgarwal) simple
- animated hero with pic on front
- email with folded paper plane "Shoot me an email!" and mailto:


jacobpawlak.com

- [resume](https://jacobpawlak.com/wp-content/uploads/2022/01/JacobPawlak_resume.pdf) - pdf loads in browser, really like coloured sections
- sliding transitions between pages
- [tshirt portfolio[(https://jacobpawlak.com/t-shirts/) scroll down and image loads, then text scrolls in


https://mrtnvh.com/

- logo top right = name in caps overlaid, rearranges on hover
- gh/li etc have different coloured background on hover
- page transitions: fast fade out / in
- footer - subtly different colour, like links

![footer](mrtnvh-footer.png)


# Process
1. next js intro course, then *with jest* starter

	```bash
	npx create-next-app --example with-jest next-profile
	```
	
	Add jest-dom extenders
	
	```bash
	npm install --save-dev @testing-library/jest-dom
	```
	
	
2. syntax.fm highlights episode and browsed for a few ideas
3. Simple penpot sketch ![penpot](penpot-next-profile-home-v1/f380b800-3a4f-11ed-a5c2-cf2300df1f4f/f380b801-3a4f-11ed-a5c2-cf2300df1f4f.svg)
4. Colours - coolors.co 
	Picked a few I like. [Initial palette](https://coolors.co/ffffe0-80808d-191936-14213d-ccdbdc)  
	embedcode
	
	```javscript
	<!-- Coolors Palette Widget -->
      <script src="https://coolors.co/palette-widget/widget.js"></script>
      <script data-id="08338321356487679">new CoolorsPaletteWidget("08338321356487679", ["ffffe0","80808d","191936","14213d","ccdbdc"],"next-profile-v1"); </script>
      ```
      