package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.model.course.Course;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class CourseController {

    @PostMapping(path = "/file", consumes = {"multipart/form-data"})
    public void saveImage(
            @RequestPart("course") Course course,
            @RequestParam(name = "file", required = false) MultipartFile file) {
        System.out.println("something");
        System.out.println("something");
    }
}
