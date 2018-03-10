import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            list: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsUndo = this.handleMarkAsUndo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description_regex=/${description}/` : '';
        axios.get(`${URL}?>=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value});
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp =>  this.refresh(this.state.description));
    }

    handleMarkAsUndo(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp =>  this.refresh(this.state.description));
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description })
            .then(resp => this.refresh());
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description));
    }

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader
                    name='Tarefas'
                    small='Cadastro'>
                </PageHeader>
                <TodoForm
                    handleSearch={this.handleSearch}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleClear={this.handleClear}
                    handleAdd={this.handleAdd} />
                <TodoList
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsUndo={this.handleMarkAsUndo}
                    list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        );
    }

}
