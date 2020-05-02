package com.web.abbachurch.dao;

import com.web.abbachurch.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;

@Repository
public class AccountDAO {

    private static final Logger log = LoggerFactory.getLogger(AccountDAO.class);

    private static final String INSERT_NEW_ACCOUNT = "insert into abba_church_users " +
            "(user_name, pass_word, first_name, last_name, phone_number) values(?,?,?,?,?)";

    private static final String GET_ACCOUNT_BY_ID = "select * from abba_church_users where id=?";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public AccountDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public User createAccountAndReturnUser(User user) {
        User newUser;
        long newUserId = insert(user);
        newUser = getUser(newUserId);
        return newUser;
    }

    public long insert(User user) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection
                    .prepareStatement(INSERT_NEW_ACCOUNT, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getUserName());
            ps.setString(2, user.getPassWord());
            ps.setString(3, user.getFirstName());
            ps.setString(4, user.getLastName());
            ps.setString(5, user.getPhoneNumber());
            return ps;
        }, keyHolder);

        log.info("Key for new user account: {}", keyHolder.getKey());

        return (long) keyHolder.getKey();
    }

    public User getUser(long id) {

        User user = new User();

        try {
            user = jdbcTemplate.queryForObject(GET_ACCOUNT_BY_ID, new Object[]{id}, new BeanPropertyRowMapper<>(User.class));
        } catch (Exception e) {
            log.error("Error getting User for id {}: [{}]", id, e.getStackTrace());
        }

        return user;
    }


}
