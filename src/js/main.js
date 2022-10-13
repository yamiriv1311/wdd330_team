import DataSource from "./data-source.js";
// index.html page js file
let datasource = new DataSource();
const renderHomePage = async(dataSource)=>{
    await dataSource.init();
    let dogs = await dataSource.getDogs()
    let output = "<ul class='x-grid'>";
    for (let item of dogs) {
        // add pet it inside the href attri or you can add event listener refresh with url param
        // use map() with id
        output += `
            <li>
                <div class="maincontainer">
                    <div class="thecard">
                        <div class="thefront">
                            <img class="theimage" src="${item.imageUrl}" alt="${item.breed}">
                            <a href="https://www.xcdc.gov/tb/topic/basics/default.htm" target="_blank"></a>
                        </div>
                        <div class="theback img-blank">
                            <a href="https://www.cdc.gov/tb/topic/basics/default.htm" target="_blank"></a>
                            <div class="x-info">
                                <h3>About me!</h3>
                                <p>My age is: ${item.age} </p>
                                <p>I am a ${item.sex}  </p>
                                <p>My size is: ${item.size} </p>
                                <p>My age is: ${item.personality} </p>
                                <p>My breed is a ${item.breed} and my speciality is: ${item.special_gift} </p>
                            </div>
                        </div>
                    </div>
                </div>	
            </li>
        `;
    }
    output += "</ul>"
    document.querySelector(".dogs").innerHTML = output;
}

renderHomePage(datasource);
