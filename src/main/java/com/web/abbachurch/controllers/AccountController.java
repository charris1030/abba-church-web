package com.web.abbachurch.controllers;

import com.web.abbachurch.dao.AccountDAO;
import com.web.abbachurch.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
@CrossOrigin("*")
public class AccountController {

    private static final Logger log = LoggerFactory.getLogger(AccountController.class);


    @Autowired
    private AccountDAO accountDAO;

    /**
     * CH - creates new Abba Church Account
     * @param user - User Object
     * @return String Response
     */
    @RequestMapping(value = "/createAccount", method = RequestMethod.POST,
            produces = "application/json", consumes = "application/json")
    public User createAccount(@RequestBody User user) {

        log.info("Creating new Abba Church Account for User {}", user);

        User newUser = new User();

        try {
            newUser = accountDAO.createAccountAndReturnUser(user);
            log.info("Create User Response {}", user);
        } catch (Exception e) {
            log.error("Error when creating user account: ", e.getCause());
        }

        return newUser;
    }

}
