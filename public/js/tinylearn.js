$(document).ready(() => {
  const url = "https://en.wikipedia.org/w/api.php";

  // eslint-disable-next-line no-unused-vars
  $("#randomPageFromWiki").on("click", () => {
    $.get("/api/categories").then(data => {
      const passedCat = data.category;
      findAPage(passedCat);
    });
  });

  function findAPage(passedCat) {
    const cmtitleInput = "Category:" + passedCat;
    const catParams = {
      action: "query",
      list: "categorymembers",
      cmtitle: cmtitleInput,
      cmlimit: "20",
      format: "json"
    };

    let catUrl = url + "?origin=*";
    Object.keys(catParams).forEach(
      key => (catUrl += "&" + key + "=" + catParams[key])
    );
    const randomPage = Math.floor(Math.random() * 20);

    $.ajax({
      url: catUrl,
      method: "GET"
    }).then(response => {
      const pickedPage = response.query.categorymembers[randomPage].title;
      retrieveAndRenderKnowledge(pickedPage);
    });
  }
  function retrieveAndRenderKnowledge(pickedPage) {
    const pageParams = {
      action: "query",
      titles: pickedPage,
      prop: "extracts",
      exintro: "",
      format: "json",
      explaintext: ""
    };

    let pageUrl = url + "?origin=*";
    Object.keys(pageParams).forEach(key => {
      pageUrl += "&" + key + "=" + pageParams[key];
    });

    $.ajax({
      url: pageUrl,
      method: "GET"
    }).then(response => {
      const wikiPageA = `<p>Learn more at <a href="https://en.wikipedia.org/wiki/${pickedPage}">${pickedPage}</a></p>`;
      const pageId = Object.keys(response.query.pages)[0];
      const knowledgeToRender = response.query.pages[pageId].extract.replace(
        /\n/g,
        "<br>"
      );
      $(".randomPageTitle").text(pickedPage);
      $(".renderhere").html(knowledgeToRender);
      $(".randomPage").append(wikiPageA);
    });
  }

  $("#addSubject").on("click", () => {
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });
  
});
