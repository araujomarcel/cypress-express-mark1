/// <reference types="cypress"/>

describe('tarefas', ()=> {
    it('deve cadastrar uma nova tarefa', ()=>{

        cy.request({
           url: 'http://localhost:3333/helper/tasks',
           method: 'DELETE',
           body: {name: "The Clone Wars"} 

        }).then(Response => {
            expect(Response.status).to.eq(204)
        })

        cy.visit('http://localhost:3000');
        cy.get('input[placeholder="Add a new Task"]')
            .type('The Clone Wars');
        cy.contains('button', 'Create').click();

        cy.get('main div p')
            .should('be.visible')
            .should('have.text', 'The Clone Wars')
    });
    it('não deve permitir tarefas duplicadas', ()=>{
        cy.visit('http://localhost:3000');
        cy.get('input[placeholder="Add a new Task"]')
            .type('The Clone Wars');

        cy.contains('button', 'Create').click();

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')

    })
});
