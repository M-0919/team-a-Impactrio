<h1 align="center">
  Before you start coding
</h1>

## technologies

Bootstrap, node-sass, gatsby

## Styling regulation

1. Please follow [this document](https://getbootstrap.com/) to use Boostrap.

1. Don't need to compile your Scss file, because node-sass automatically compile them.

1. To avoid your class-name effect others section, please put your section name on the beginning of your class name,
   `ex).yourSectionName__container`. Ps boiler-plate follows [BEM naming](https://css-tricks.com/using-sass-control-scope-bem-naming/)

1. Please use style-valiable defined on src/styles/global.scss,
   ex) `.yourSectionName__container{background-colour:$orenge}`, in case of Bootstrap ex) `text-custom-orange` => `color:#fa7921`

1. Please use `rem` instead of `px`, that reasons is refered on this link [why rem, how to use rem](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) ex) `font-size:2rem`=>`font-size:20px//16px * 62.5% * 2`

## What's inside?

1. `src/styles/global.scss`: it is defined styling such as h1 h2 a etc.., not for individual components, so your components styling should be defined on same directory.

2. `src/images`: Images on lower of the folder are available in graphql queries (only jpg or png).

3. `src/components/Layout`: It has header and footer components.

4. `src/static`: It is for icons and svg images.

## How to handle images in Gatsby

1.  Import Image component from `src/components/image.jsx` into your section

2.  Pass relative path to Image components ex) `<Image filename={"imagePath"} alt=""/>`, `src/images` => "", so if your image path is `src/images/sample1.jpg`, that should be `sample1.jpg`

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
