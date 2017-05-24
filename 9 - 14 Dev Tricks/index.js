const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    var poo = "💩";
    // Regular
    console.log("Hello World")
    // Interpolated
    console.log(`Hello I am a ${poo} string!`)
    // Styled
    console.log("%c I am awesome text", 'font-size:20px; background:orange; text-shadow: 10px 10px 0 blue')
    // warning!
    console.warn("We've got problems;")
    // Error :|
    console.error("Big problems")
    // Info
    console.info("A cup of ice will way the same as the water when it is melted, but will take more volume when it is ice because when ice crystallizes into its hexagonal structure the water molecules are farther apart than when they are in the liquid state")
    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), "That is incorrect")
    // clearing
    //console.clear() clears the console
    // Viewing DOM Elements
    console.log(p)
    console.dir(p)
    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`)
        console.log(`This is ${dog.name}.`)
        console.log(`${dog.name} is ${dog.age} years old.`)
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`)
        console.groupEnd(`${dog.name}`)
    })
    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Dan');
    console.count('Wes');
    console.count('Wes');
    console.count('Dan');
    console.count('Dan');
    console.count('Dan');
    console.count('Wes');
    console.count('Dan');
    // timing
    console.time('Fetchin data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('Fetchin data')
        })

    console.table(dogs);