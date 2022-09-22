let listDOM = document.querySelector("#list")
let textDOM = document.querySelector("#task")
let checkDOM = document.getElementsByTagName("input")

let count = 3
let newTask;

let gorevler = [
    {title: "Ödevleri Yap", id: `gorev0`, isActive: true},
    {title: "En Az 3 Saat Kodlama Yap", id: `gorev1`, isActive: true},
    {title: "3 Litre Su İç",id: `gorev2`, isActive: true}
]


function deleteItems()
{
    let taskDOM

    //console.log(taskDOM[1].innerHTML)

    for (let i = 0; i< count-3;i++)
    {
        taskDOM = document.querySelectorAll(`#gorev${i}`)
        if (i % 2 == 0)
        {
            console.log(taskDOM[i].innerHTML)
        }
    }



    // for (let i = 0; i < checkDOM.length; i++)
    // {   
    //     if (checkDOM[i].type == "checkbox")
    //     {
    //         console.log(checkDOM[i])
    //     }
    // }
    
}

function check()
{
    //this.parentElement.remove();
}

function clickTask(kk)
{
}



function newElement()
{
    updateList()

    let li_new = document.createElement("li")
    let input_new = document.createElement("input")
    let label_new = document.createElement("label")

    li_new.classList.add("list-group-item")

    input_new.classList.add("form-check-input")
    input_new.type = "checkbox"
    input_new.id = `gorev${count}` 
    //ss.id = "firstCheckboxStretched"

    label_new.classList.add("form-check-label")
    label_new.innerHTML = gorevler[gorevler.length-1].title
    label_new.id = `gorev${count}` 
    

    li_new.append(input_new)
    li_new.append(label_new)

    listDOM.append(li_new)


    textDOM.value = ""
}

function newListItemAdd()
{

}


function updateList()
{
    gorevler[gorevler.length-1].title = textDOM.value
    gorevler[gorevler.length-1].id = `gorev${count}`
    count++
}




{/* <li class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
          <label class="form-check-label stretched-link" for="firstCheckboxStretched">3 Litre Su İç</label>
        </li> */}