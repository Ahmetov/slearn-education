package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.model.course.CourseCategory;
import ahmetov.slearnbackend.service.CourseCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course-category")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class CourseCategoryController {

    private final CourseCategoryService courseCategoryService;

    @GetMapping
    public List<CourseCategory> getAll() {
        return courseCategoryService.getAll();
    }

    @PostMapping
    public void save(@RequestBody CourseCategory courseCategory) {
        courseCategoryService.create(courseCategory);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        courseCategoryService.delete(id);
    }
}
