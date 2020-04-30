package com.web.abbachurch.dao;

import com.web.abbachurch.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

@Repository
public class AccountDAO {

    private static final Logger log = LoggerFactory.getLogger(AccountDAO.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public AccountDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public int insert(User user) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int newRecordId = 0;
        jdbcTemplate.update(
                "insert into abba_church_users (user_name, pass_word, first_name, last_name, phone_number) " +
                        "values(?,?,?,?,?)",
                user.getUserName(), user.getPassWord(), user.getFirstName(), user.getLastName(), user.getPhoneNumber());
        log.info("ID for new account record: {}", newRecordId);
        return newRecordId;
    }

}
