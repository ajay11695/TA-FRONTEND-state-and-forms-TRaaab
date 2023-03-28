# Assignment: Component Types

1. Convert the following functional component to class component

function Card() {
  return (
    <div>
      <h2>Hello React!</h2>
    </div>
  );
}

```JSX
// class component
class Card extends React.Component{
constructor(props){
  super(props)
}
    render(){
        return(
          <div>
            <h2>Hello React!</h2>
          </div>
        )
    }
}

```


function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}

```JSX
// class component
class HelloMessage extends React.Component{
    contructor(props){
        Super(props)
    }
    render(){
        return (<div>Hello {this.props.name}</div>)
    }
}

```


function HelloMessage(props) {
  return <div>Hello {props.name}</div>;
}

```JSX
// class component
class HelloMessage extends React.Component{
    contructor(props){
        Super(props)
    }
    render(){
        return (<div>Hello {this.props.name}</div>)
    }
}

```


function Comment(props) {
  return (
    <div className='Comment'>
      <div className='UserInfo'>
        <img
          className='Avatar'
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className='UserInfo-name'>
          {props.author.name}
        </div>
      </div>
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>
        {formatDate(props.date)}
      </div>
    </div>
  );
}

```JSX
// class component
   class Comment extends React.Component{
    contructor(props){
        Super(props)
    }
    render(){
        return (
    <div className='Comment'>
      <div className='UserInfo'>
        <img
          className='Avatar'
          src={this.props.author.avatarUrl}
          alt={this.props.author.name}
        />
        <div className='UserInfo-name'>
          {this.props.author.name}
        </div>
      </div>
      <div className='Comment-text'>{this.props.text}</div>
      <div className='Comment-date'>
        {formatDate(this.props.date)}
      </div>
    </div>
  );
    }
}
```

function Avatar(props) {
  return (
    <img
      className='Avatar'
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

```JSX
// class component
  class Avatar extends React.Component{
    contructor(props){
        Super(props)
    }
    render(){
         return (
    <img
      className='Avatar'
      src={this.props.user.avatarUrl}
      alt={this.props.user.name}
    />
  );
    }
}

```

function UserInfo(props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-name'>{props.user.name}</div>
    </div>
  );
}

```JSX
// class component
   class UserInfo extends React.Component{
    contructor(props){
        Super(props)
    }
    render(){
         return (
             <div className='UserInfo'>
                 <Avatar user={this.props.user} />
                 <div className='UserInfo-name'>{this.props.user.name}</div>
             </div>
         );
    }
}

```

2. What are the advantages of using class component

 `Its tend to implement logic and state because of that its called "smart" or “stateful”component. React life cycle methods can be used within the class component. Can pass props and can be access props by using this.props.`

3. Why we use `super()` inside a class component `constructor`

 `if we call constructor then in order to execute the constructor we need to call super constructor`