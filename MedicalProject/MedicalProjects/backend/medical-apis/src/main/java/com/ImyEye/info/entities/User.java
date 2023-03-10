package com.ImyEye.info.entities;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@NoArgsConstructor
@Getter
@Setter
public class User implements UserDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
     private int id;
	@Column(nullable = false,length=100)
     private String name;
     @Email
     @Column(unique = true)
     private String email;
     @Column(nullable = false)
     private String password;
     // age
     @Column(nullable = false)
     private int age;
     //weight
     @Column(nullable = false)
     private int weight;
     //height
     @Column(nullable = false)
     private int height;
     //contact
     @Column(nullable = false)
     private int contact;
     //address
     @Column(nullable = false)
     private String address;

     // @Column(name="reset_password_token")
     // private String resetPasswordToken;
     
//     @ManyToOne(mappedBy = "doctor",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
     // @ManyToOne
     // private List<Prescription> patients = new ArrayList<>();

     @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
     List<Prescription> lists = new ArrayList<>();

     @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
     List<Appointment> appointmentlist = new ArrayList<>();


     @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
     @JoinTable(name="user_role",joinColumns = @JoinColumn(name="user",referencedColumnName = "Id"),
     inverseJoinColumns = @JoinColumn(name="role",referencedColumnName = "Id"))
     private Set<Role> roles = new HashSet<>();

     @Override
     public Collection<? extends GrantedAuthority> getAuthorities() {
          //take each role and then convert it into GrantedAuthority
         List<SimpleGrantedAuthority> authorities = this.roles.stream().map((role)->new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
          return authorities;
     }

     @Override
     public String getUsername() {
          
          return this.email;
     }

     @Override
     public boolean isAccountNonExpired() {
          // TODO Auto-generated method stub
          return true;
     }

     @Override
     public boolean isAccountNonLocked() {
          // TODO Auto-generated method stub
          return true;
     }

     @Override
     public boolean isCredentialsNonExpired() {
          // TODO Auto-generated method stub
          return true;
     }

     @Override
     public boolean isEnabled() {
          // TODO Auto-generated method stub
          return true;
     }

}
