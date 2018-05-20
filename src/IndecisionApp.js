class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
               this.setState(() => ( { options } ));
            };
        } catch (e) {
            // NOTHING
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("saving data");
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() =>   ( { options: [] } ))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((oldState) => ({
            options: oldState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This options already exists';
        } else {
            this.setState((oldState) => ({options: oldState.options.concat(option)}));
            return null;
        }
    }
    render () {
        const title = "Indecision";
        const subtitle = "Put you life in the hands of a computer.";
        const options = ['thing1', 'thing2', 'thing3'];
        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitile && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'some default'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) =>
                    props.handleDeleteOption(props.optionText)
                }
            >
                Remove
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please Add and Option to get started</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ( { error } ));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

// ReactDOM.render(<User name='Gregg' age={60} />, document.getElementById('app'));