package com.web.abbachurch.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @RequestMapping("api/hello")
    public String hello() {
        return "Welcome to Abba Church";
    }



}
