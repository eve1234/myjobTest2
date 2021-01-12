/// <reference types="cypress" />
import * as jobs from '../pages/jobs';

const footerLinks=[{footer:'Find Jobs', pageTitle:'Job.com: Your Job Search Starts Here.'},{footer:'Register', pageTitle:'Candidate Registration - Job.com'},{footer:'Sign In', pageTitle:`Sign in - Job.com`},{footer:'News', pageTitle:'News - Job.com'},{footer:'Employers', pageTitle:'Employers - Job.com'}];

describe('Footer Link Tests', () =>{
    beforeEach(()=>{
        jobs.navigateToBaseURL();
    });

    footerLinks.forEach((footerLink) =>{
        it(`Click on - ${footerLink.footer} link to continue`, () =>{
            cy.contains(`${footerLink.footer}`).click({force: true});
            cy.title().should('eq',`${footerLink.pageTitle}`);
        });
    });

});













