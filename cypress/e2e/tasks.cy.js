/// <reference types="cypress"/>

describe('tarefas', ()=> {
    it('deve cadastrar uma nova tarefa', ()=>{
        cy.visit('http://localhost:3000');
        cy.get('input[placeholder="Add a new Task"]')
            .type('The Clone Wars');
        cy.contains('button', 'Create').click();
    });
});
