/// <reference types="cypress" />
import * as jobs from '../pages/jobs';

const footerLinks=[{footer:'Find Jobs', expected:'jobs'},{footer:'Register', expected:'Currently we are only accepting clients in the USA'},{footer:'Sign In', expected:'Sign In'},{footer:'News', expected:''},{footer:'Employers', expected:''}];

describe('Footer Link Tests', () =>{
    beforeEach(()=>{
        jobs.navigateToBaseURL();
    });

    footerLinks.forEach((footerLink) =>{
        it(`Click on - ${footerLink.footer} link to continue`, () =>{
            cy.contains(`${footerLink.footer}`).click({force: true});
        });
    });

});













