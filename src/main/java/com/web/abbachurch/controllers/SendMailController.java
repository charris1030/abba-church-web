package com.web.abbachurch.controllers;
import com.web.abbachurch.domain.OnlineMember;
import com.web.abbachurch.providers.MailProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.Arrays;

@RestController
@RequestMapping("/mail")
@CrossOrigin("*")
public class SendMailController {

    @Autowired
    private MailProvider mailProvider;

    @RequestMapping(value = "/sendOnlineMemberRegMail", method = RequestMethod.POST,
                    produces = "application/json", consumes = "application/json")
    public String sendMail(@RequestBody OnlineMember onlineMember) throws MessagingException {

        System.out.println("Sending Online Member Registration Email: "+ onlineMember.getEmail());

        String responseStr =null;

        try {
            mailProvider.sendEmail(onlineMember.getEmail());
        } catch (Exception e) {
            System.out.println(Arrays.toString(e.getStackTrace()));
        }

        responseStr = "Online Member Registration Confirmed";

        return responseStr;
    }

}
