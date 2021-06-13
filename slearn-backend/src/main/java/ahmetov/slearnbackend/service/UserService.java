package ahmetov.slearnbackend.service;

import ahmetov.slearnbackend.model.user.AppUser;
import ahmetov.slearnbackend.model.user.Role;
import ahmetov.slearnbackend.model.dto.RegistrationDto;

import java.util.List;

public interface UserService extends BaseService<AppUser, Long>{
    void registration(RegistrationDto registrationDto);
    List<Role> getRolesOfCurrentUser();
    AppUser getCurrentUserInfo();
}
