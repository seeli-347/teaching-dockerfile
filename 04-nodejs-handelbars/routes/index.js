var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Handelbars",
    navOne: "Home",
    navTwo: "Table",
    navThree: "Card",
  });
});

router.get("/table", (req, res) => {
  const companyList = [
    {
      comapany: "Alfreds Futterkiste",
      Contact: "Maria Anders",
      Country: "Germany",
    },
    {
      comapany: "Berglunds snabbköp",
      Contact: "Christina Berglund",
      Country: "Sweden",
    },
    {
      comapany: "Centro comercial Moctezuma",
      Contact: "Francisco Chang",
      Country: "Mexico",
    },
    {
      comapany: "Ernst Hande",
      Contact: "Roland Mendel",
      Country: "Austria",
    },
  ];

  res.render("table", { list: companyList });
});

router.get("/card", (req, res) => {
  const cardList = [
    {
      image: "/images/explore-section1.jpg",
      btnLeft: "Github",
      btnRight: "Live",
    },
    {
      image: "/images/create-section1.jpg",
      btnLeft: "Github",
      btnRight: "Live",
    },
    {
      image: "/images/share-section1.jpg",
      btnLeft: "Github",
      btnRight: "Live",
    },
  ];

  res.render("card", { cardList });
});

// router.get('/test' , (req,res) => {
//    res.send('Test');
// })

module.exports = router;
