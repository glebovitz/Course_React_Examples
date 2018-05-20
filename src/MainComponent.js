import React from 'react';
import ReactDOM from 'react-dom';

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteItems = this.handleDeleteItems.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleSelectItem = this.handleSelectItem.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleClearSelectedItem=this.handleClearSelectedItem.bind(this);
        this.state = {
            items: [],
            seletedItem: undefined
        }
    }

    // Mount Lifecycle

    componentDidMount() {
        try {
            const json = localStorage.getItem('items');
            const items = JSON.parse(json);
            if (items) {
               this.setState(() => ( { items } ));
            };
        } catch (e) {
            // NOTHING
        };
    };

    componentWillUnmount() {
    };
  
    // Update Lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);
        }
    };
    handleSelectItem(item) {
        // const randomNum = Math.floor(Math.random() * this.state.items.length);
        // const item = this.state.items[randomNum];
        this.setState(() => ({
            selectedItem: item
        }));
        // alert(item);
    }
    handleDeleteItems() {
        this.setState(() =>   ( { items: [] } ))
    }
    handleDeleteItem(itemToRemove) {
        this.setState((oldState) => ({
            items: oldState.items.filter((item) => itemToRemove !== item)
        }));
    }
    handleAddItem(item) {
        if (!item) {
            return 'Enter a valid value to add item';
        } else if (this.state.items.indexOf(item) > -1) {
            return 'This item already exists';
        } else {
            this.setState((oldState) => ({items: oldState.items.concat(item)}));
            return null;
        }
    }
    handleClearSelectedItem = () => {
        this.setState(() => ({
            selectedItem: undefined
        }));
    };
    render () {
        const title = "MainComponent";
        const subtitle = "Example of main component with items.";
        const items = ['item1', 'item2', 'item3'];
        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                />
                <Action 
                    selectedItem={this.state.selectedItem}
                    handleClearSelectedItem={this.handleClearSelectedItem}
                />
                <Items 
                    items={this.state.items}
                    selectedItem={this.state.selectedItem}
                    handleDeleteItems={this.handleDeleteItems}
                    handleDeleteItem={this.handleDeleteItem}
                    handleSelectItem={this.handleSelectItem}
                />
                <AddItem
                    handleAddItem={this.handleAddItem}
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
                onClick={props.handleClearSelectedItem}
                disabled={!props.selectedItem}
            >
                Clear Item
            </button>
        </div>
    )
}

const Item = (props) => {
    return (
        <div>
            {props.itemText}
            <button 
                onClick={(e) =>
                    props.handleDeleteItem(props.itemText)
                }
            >
                Remove
            </button>
            <button 
                onClick={(e) => {
                    props.handleSelectItem(props.itemText);
                }}
                disabled={props.selectedItem === props.itemText}
            >
                Select
            </button>
        </div>
    );
}

const Items = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteItems}>Remove All</button>
            {props.items.length === 0 && <p>Please Add and Item to get started</p>}
            {
                props.items.map((item) => (
                    <Item
                        key={item} 
                        itemText={item}
                        selectedItem={props.selectedItem}
                        handleDeleteItem={props.handleDeleteItem}
                        handleSelectItem={props.handleSelectItem}                    />
                ))
            }
        </div>
    );
}

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddItem(e) {
        e.preventDefault();
        console.log("target", e.target.item.value);
        const item = e.target.item.value.trim();
        const error = this.props.handleAddItem(item);
        this.setState(() => ( { error } ));

        if (!error) {
            e.target.elements.item.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <input type='text' name='item'/>
                    <button>Add Item</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}
