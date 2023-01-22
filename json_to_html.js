let process_child = function (obj) {
  let li = document.createElement("li")
  if (obj === null) {
  }
  else if (typeof obj === "string") {
    li.innerHTML = obj
    li.setAttribute("data-inner-text", obj)
  }
  else {
    if (Array.isArray(obj)) {
      let ul = document.createElement("ul")
      li.appendChild(ul)
      for (index in obj) {
        let rc = process_child(obj[index])
        ul.appendChild(rc)
      }
    }
    else {
      if (Object.keys(obj).length === 1) {
        let div = document.createElement("div")
        let key = Object.keys(obj)[0]
        div.innerHTML = key
        div.setAttribute("data-inner-html",key)
        li.appendChild(div)
        let ul = document.createElement("ul")
        let rc = process_child(obj[key])
        ul.appendChild(rc)
        li.appendChild(ul)
      }
      else if (Object.keys(obj).length > 1) {
        let ul = document.createElement("ul")
        li.appendChild(ul)
        for (index in obj) {
          let temp_li = document.createElement("li")
          ul.appendChild(temp_li)
          let temp_ul = document.createElement("ul")
          let temp_div = document.createElement("div")
          temp_div.innerHTML = index
          temp_div.setAttribute("data-inner-text",index)
          temp_li.appendChild(temp_div)
          temp_li.appendChild(temp_ul)
          let rc = process_child(obj[index])
          temp_ul.appendChild(rc)
        }
        li.appendChild(ul)
      }
    }
  }
  return li
}












