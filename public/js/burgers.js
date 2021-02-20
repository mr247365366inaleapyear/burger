$(() => {
  $(".change-sleep").on("click", (_event) => {
    const id = $(this).data("id");
    const newDevour = $(this).data("newsleep");


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      () => {
        console.log("changed devour to", newDevour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", (_event) => {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      () => {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
