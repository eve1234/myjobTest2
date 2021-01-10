/// <reference types="cypress" />

import * as findjobs from '../pages/findjobs';
import * as jobs from '../pages/jobs';

const topCategories=[{category:'Transportation/ Logistics'},{category:'Healthcare'},{category:'Retail/ Wholesale'},{category:'Administration/ CustomerService'}];

const topTitles=[{title:'Truck Driver'},{title:'Registered Nurse'},{title:'Customer Service Representative'},{title:'Delivery Driver'}];

const topLocations=[{location:'Denver'},{location:'New York'},{location:'Cincinnati'},{location:'Dallas'}];

const topCompanies=[{company:'Amazon'},{company:'United Parcel Service'},{company:'Hogan Transportation'},{company:'Walmart'}];


describe('find jobs page', () =>{
    beforeEach(()=>{
        jobs.navigateToBaseURL();
    });
    describe('Finding job Tests', () =>{
        it('find QA Engineer jobs in the US that are relevant', () =>{
            cy.contains('role or keywords').type('QA Engineer {enter}');
            cy.contains('city, state or zip').type('Los Angeles CA {enter}');
            cy.get(findjobs.submitButton).click();
            cy.contains('Relevance').should('be.enabled');
        });
        it('Find Developer jobs in the US, view by Date posted', () =>{
            cy.contains('role or keywords').type('Developer {enter}');
            cy.contains('city, state or zip').type('London Hill GA {enter}');
            cy.get(findjobs.submitButton).click();
            cy.wait(2000);
           cy.get(findjobs.datePosted).should('be.visible').click();
        });
    });

    describe('Search jobs by top 10s', () =>{
            topCategories.forEach((topCategory) =>{
                it(`Find job by - ${topCategory.category}`, () =>{
                    cy.contains(`${topCategory.category}`).should('be.visible').click({force: true});
                    cy.contains('Relevance').should('be.enabled');
                });
            });
            topTitles.forEach((topTitle) =>{
                it(`Find job by title - ${topTitle.title}`, () =>{
                    cy.contains(`${topTitle.title}`).should('be.visible').click({force: true});
                    cy.contains('Relevance').should('be.enabled');
                });
            });
            topLocations.forEach((toplocation) =>{
                it(`Find job by location - ${toplocation.location}`, () =>{
                    cy.contains(`${toplocation.location}`).should('be.visible').click({force: true});
                    cy.contains('Relevance').should('be.enabled');
                });
             });
            topCompanies.forEach((topCompany) =>{
                it(`Find job by category - ${topCompany.company}`, () =>{
                    cy.contains(`${topCompany.company}`).should('be.visible').click({force: true});
                    cy.contains('Relevance').should('be.enabled');
                });
            });

    });

    describe('Registration Tests', () =>{
        it('Verify the Become a member button on the homepage works', () =>{
        cy.contains('Become a member').click({force: true});
        });

        it('Verify the Learn more button on the homepage works', () =>{
            cy.contains('Learn more').should('be.visible').click({force: true});
            cy.contains('enquire now').should('be.visible');
        });
    })

})