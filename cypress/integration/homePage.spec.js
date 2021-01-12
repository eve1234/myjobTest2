/// <reference types="cypress" />

import * as findjobs from '../pages/homePage';
import * as jobs from '../pages/jobs';

const topCategories=[{category:'Transportation/ Logistics', pageTitle:`106144 Transportation/Logistics jobs in USA - Job.com`},{category:'Healthcare', pageTitle: '103578 Healthcare jobs in USA - Job.com'},{category:'Retail/ Wholesale', pageTitle:'30378 Retail/Wholesale jobs in USA - Job.com'},{category:'Administration/ CustomerService', pageTitle: '30035 Administration/Customer Service jobs in USA - Job.com'}];

const topTitles=[{title:'Truck Driver', pageTitle: `27801 Truck Driver jobs (Transportation/Logistics) - Job.com`},{title:'Registered Nurse', pageTitle:'42713 RN jobs (Healthcare) - Job.com'},{title:'Customer Service Representative', pageTitle:`12307 Representative jobs (Administration/Customer Service) - Job.com`},{title:'Delivery Driver',pageTitle: `5541 Delivery Driver jobs (Transportation/Logistics) - Job.com` }];

const topLocations=[{location:'Denver', pageTitle: `5200 jobs in Denver, CO - Job.com`},{location:'New York', pageTitle: `14510 jobs in New York City, NY - Job.com`},{location:'Cincinnati', pageTitle:`4163 jobs in Cincinnati, OH - Job.com`},{location:'Dallas', pageTitle:`7927 jobs in Dallas, TX - Job.com`}];

const topCompanies=[{company:'Amazon', pageTitle: `16631 jobs in USA - Job.com`},{company:'Hogan Transportation', pageTitle: `2000 jobs in USA - Job.com`},{company:'Intuit', pageTitle: '780 jobs in USA - Job.com'},{company:'Walmart', pageTitle: '507 jobs in USA - Job.com'}];


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
            //cy.title().should().contains('Search');
            cy.title().should('eq','Search');
        });
        it('Find Developer jobs in the US, view by Date posted', () =>{
            cy.contains('role or keywords').type('Developer {enter}');
            cy.contains('city, state or zip').type('London Hill GA {enter}');
            cy.get(findjobs.submitButton).click();
            cy.wait(2000);
            cy.get(findjobs.datePosted).should('be.visible').click();
            //cy.title().should().contains('Search');
            cy.title().should('eq','Search');

        });
    });

    describe('Search jobs by top 10s', () =>{
            topCategories.forEach((topCategory) =>{
                it(`Find job by - ${topCategory.category}`, () =>{
                    cy.contains(`${topCategory.category}`).should('be.visible').click({force: true});
                    cy.title().should('eq',`${topCategory.pageTitle}`);
                });
            });
            topTitles.forEach((topTitle) =>{
                it(`Find job by title - ${topTitle.title}`, () =>{
                    cy.contains(`${topTitle.title}`).should('be.visible').click({force: true});
                    cy.title().should('eq', `${topTitle.pageTitle}`);
                });
            });
            topLocations.forEach((toplocation) =>{
                it(`Find job by location - ${toplocation.location}`, () =>{
                    cy.contains(`${toplocation.location}`).should('be.visible').click({force: true});
                    cy.title().should('eq',`${toplocation.pageTitle}`);
                });
             });
            topCompanies.forEach((topCompany) =>{
                it(`Find job by category - ${topCompany.company}`, () =>{
                    cy.contains(`${topCompany.company}`).should('be.visible').click({force: true});
                    cy.title().should('eq',`${topCompany.pageTitle}`);
                });
            });

    });

    describe('Registration Tests', () =>{
        it('Verify the Become a member button on the homepage works', () =>{
        cy.contains('Become a member').click({force: true});
        cy.title().should('eq','Candidate Registration - Job.com');
        });

        it('Verify the Learn more button on the homepage works', () =>{
            cy.contains('Learn more').should('be.visible').click({force: true});
            cy.title().should('eq','Employers - Job.com');
        });
    })

})