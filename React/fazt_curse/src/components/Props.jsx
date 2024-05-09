import React from 'react';

class ThisProps extends React.Component{
    render(){
        return (
            // Y asi comento fuera del render
            <>
                {/* De esta forma puedo hacer comentarios dentro del render html */}
                <h1>Your Name is {this.props.name}</h1>
                <p>You have ${this.props.amount}</p>
                <p>You are {this.props.married ? "happily":"not"} married</p>
                <p>Your addres it's {this.props.addres.street} in the city of {this.props.addres.city}</p>
                <p>And you have the following points: {this.props.points}</p>
            </>
        )
    }
}

function Props({name,amount,married,addres,points}){
    return (
        <>
            {/* Asi usamos de otra forma los props */}
            <h1>Your Name is {name}</h1>
            <p>You have ${amount}</p>
            <p>You are {married ? "happily":"not"} married</p>
            <p>Your addres it's {addres.street} in the city of {addres.city}</p>
            <p>And you have the following points: {points}</p>
        </>
    )
}

export default Props;


/* 

root.render(
  <>
    <Props
      name="Carlos"
      amount={3000}
      married={false}
      points={[1,12,28,19]}
      addres={{street: "Cra 158B #138D", city:"Bogota"}}
    />
    <Props
      name="Maria"
      amount={1200}
      married={true}
      points={[1,12,28,19]}
      addres={{street: "Cra 158B #138D", city:"Mdallo"}}
    />
  </>
);

*/