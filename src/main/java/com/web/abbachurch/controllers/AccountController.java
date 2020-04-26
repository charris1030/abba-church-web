package com.web.abbachurch.controllers;

import com.web.abbachurch.domain.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
@CrossOrigin("*")
public class AccountController {

    /**
     * CH - creates new Abba Church Account
     * @param user - User Object
     * @return String Response
     */
    @RequestMapping(value = "/createAccount", method = RequestMethod.POST,
            produces = "application/json", consumes = "application/json")
    public String sendMail(@RequestBody User user) {

        System.out.println("Creating new Abba Church Account for User: "+ user);

        String responseStr;

        responseStr = "Abba Church Account Creation Succeeded";

        return responseStr;
    }

}
