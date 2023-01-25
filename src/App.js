import React from 'react';
import './App.css';
import axios from 'axios'; //Used to make a GET request to an API
import { Card, Text, css, Button} from "@nextui-org/react";

class App extends React.Component {
    state = {
        advice: '',
        adviceAuthor: ''
    };

    componentDidMount(){
        console.log('Component Mounted!');
        this.fetchQuotes();
    }

    fetchQuotes = () => {
        axios.get('https://type.fit/api/quotes')
        .then((response) => {
            const quote = response.data[Math.floor(Math.random() * 1642)];
            const quoteText = quote.text;
            const quoteAuthor = quote.author;
            console.log(quote);
            this.setState({ advice: quoteText});
            this.setState({adviceAuthor: quoteAuthor});
        })

        .catch((error) => {
            console.log(error);
        });
    }

    render(){

        const {quote} = this.state.advice;
        return(
            
        <div className="app">  
            

            <div className= "card">
                <Card
                    onPress={this.fetchQuotes}
                    isPressable
                    isHoverable
                    variant= "bordered"
                    css={{ 
                        mw: "500px", 
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 'auto',
                        top: '150px',
                        boxShadow: '500px',
                        backgroundColor: 'WhiteSmoke',
                        }}
                 >
                <Card.Body>
                    <Text h4
                        weight= "bold"
                        css={{
                        padding: '10px',
                        margin: '15px',
                        }}
                    >
                    "{this.state.advice}" 
                    </Text>

                    <Text
                        h5
                        weight= "hairline"
                        css={{
                        padding: '10px',
                        margin: '15px',
                        
                        }}
                    >
                     {this.state.adviceAuthor}
                    </Text>
                </Card.Body>
            </Card>
        <Button light color="primary" auto
        onClick={() =>  navigator.clipboard.writeText(this.state.advice)}
        
        >
          Copy quote!
        </Button>           
            </div>


        </div>

        );
        
    }
}

export default App;