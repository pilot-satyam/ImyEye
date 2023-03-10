package com.ImyEye.info.services.impl;
import com.ImyEye.info.exceptions.*;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ImyEye.info.config.AppConstants;
import com.ImyEye.info.entities.Role;
import com.ImyEye.info.entities.User;
import com.ImyEye.info.payloads.UserDto;
import com.ImyEye.info.repositories.RoleRepo;
import com.ImyEye.info.repositories.UserRepo;
import com.ImyEye.info.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
     private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;
     
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private RoleRepo roleRepo;
	
	//CREATING THE USER
	@Override
	public UserDto createUser(UserDto userDto) {
		User user = this.dtoToUser(userDto);
		User savedUser = this.userRepo.save(user);
		return this.userToDto(savedUser);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		//here id is the field name and userId is it's value
		//first getting 
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
		//after getting now we are setting
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setAge(userDto.getAge());
		user.setWeight(userDto.getWeight());
		user.setHeight(userDto.getHeight());
		user.setContact(userDto.getContact());
		user.setAddress(userDto.getAddress());
		//now update it
		User updatedUser = userRepo.save(user);
		UserDto userDto1 = userToDto(updatedUser);
		return userDto1;
	}
	
	//For getting the userById

	@Override
	public UserDto getUserById(Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
		return this.userToDto(user);
	}

	
	// For getting all the Users
	@Override
	public List<UserDto> getAllUsers() {
		//we are using Lambda's stream api to convert List of users to List of UserDto
		List<User> users = this.userRepo.findAll();
		//since we need to send UserDto hence we need to convert users into 
		List<UserDto> userDtos = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());
		return userDtos;
	}

	
	// TO DELETE
	@Override
	public void deleteUser(Integer userId) {
        User user =   this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
        this.userRepo.delete(user);
	}
	
	//this method is converting the userDto entity to User
	
	public User dtoToUser(UserDto userDto)
	{
		//using model mapper we give src to destination
		
		User user = this.modelMapper.map(userDto, User.class);
//	    User user = new User();
//		user.setId(userDto.getId());
//		user.setName(userDto.getName());
//		user.setEmail(userDto.getEmail());
//		user.setPassword(userDto.getPassword());
		return user;
	}
	
	//this method is converting the user entity to UserDto ---> vice-versa of above method
	
	public UserDto userToDto(User user)
	{
		UserDto userDto = this.modelMapper.map(user,UserDto.class);
//		userDto.setId(user.getId());
//		userDto.setName(user.getName());
//		userDto.setEmail(user.getEmail());
//		userDto.setPassword(user.getPassword());
		return userDto;
	}

	@Override
	public UserDto registerUser(UserDto userDto) {
		//converting dto to user
		User user = this.modelMapper.map(userDto,User.class);
		//get the password from user that is plain text and then passing it to encode method and then set it
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		// user.setAddress(null);
        Role role =  this.roleRepo.findById(AppConstants.NORMAL_USER).get();
		user.getRoles().add(role);
		User newUser =  this.userRepo.save(user);
		return this.modelMapper.map(newUser,UserDto.class);
	}

	public void updateUserPassword(User user, String password) {
		user.setPassword(passwordEncoder.encode(password));
		userRepo.save(user);
	}

	@Override
    public UserDto getUserByEmail(String email) {
        User user = this.userRepo.findByEmail(email)
            .orElseThrow(() -> new ResourceNotFoundException("User", "Email", 0));
        return this.userToDto(user);
    }

	
}
