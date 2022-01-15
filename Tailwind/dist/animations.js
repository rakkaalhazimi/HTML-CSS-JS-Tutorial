function expand_sidebar() {
    let object = document.getElementById("sidebar")
    let added_cls = "sidebar-expand"
    
    if ( object.classList.contains(added_cls) ) {
        object.classList.remove(added_cls)
    } else {
        object.classList.add(added_cls)
    }

    console.log(object.style)
}
