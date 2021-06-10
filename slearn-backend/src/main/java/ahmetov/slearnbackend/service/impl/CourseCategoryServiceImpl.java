package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.dao.CourseCategoryRepository;
import ahmetov.slearnbackend.exception.NotFoundException;
import ahmetov.slearnbackend.model.course.CourseCategory;
import ahmetov.slearnbackend.service.CourseCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseCategoryServiceImpl implements CourseCategoryService {

    private final CourseCategoryRepository courseCategoryRepository;

    @Override
    public List<CourseCategory> getAll() {
        return courseCategoryRepository.findAll();
    }

    @Override
    public CourseCategory getById(Long id) {
        return courseCategoryRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Категория курса не найдена"));
    }

    @Override
    @Transactional(rollbackOn = NotFoundException.class)
    public void delete(Long id) {
        CourseCategory category = courseCategoryRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Категория курса не найдена"));
        courseCategoryRepository.delete(category);
    }

    @Override
    public void update(CourseCategory obj) {

    }

    @Override
    public void create(CourseCategory obj) {
        courseCategoryRepository.save(obj);
    }
}
