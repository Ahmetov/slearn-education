package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.model.course.Course;
import ahmetov.slearnbackend.service.CourseService;
import ahmetov.slearnbackend.service.impl.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;
    private final FileStorageService fileStorageService;

    @PostMapping(path = "/file", consumes = {"multipart/form-data"})
    public Course saveImage(
            @RequestPart("course") Course course,
            @RequestParam(name = "file", required = false) MultipartFile file) throws IOException {
        Course savedCourse = courseService.createAndReturnId(course, file);
        if (file != null) {
            fileStorageService.store(file, savedCourse);
        }
        return savedCourse;
    }

    @GetMapping()
    public List<Course> getAll() {
        return courseService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        courseService.delete(id);
    }

    @PutMapping()
    public void update(@RequestBody Course course) {
        courseService.update(course);
    }
}
