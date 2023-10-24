    //getting element by id

    var input = document.getElementById("one")
    var listitem = document.getElementById("two")

    //creating function for adding list

    function add()
    {
      var list = document.createElement("li")
      list.innerHTML = input.value + "<button class='delete2-btn' onclick='deleteitem(event)'>X</button>"
      listitem.append(list)
    }

    //creating function for deleting list

    function deleteitem(event)
    {
      event.target.parentElement.remove()
    }

    function deleteall(event)
    {
      event.target.parentElement.remove()
    }