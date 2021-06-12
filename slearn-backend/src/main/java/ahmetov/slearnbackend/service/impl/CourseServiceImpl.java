package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.dao.CourseRepository;
import ahmetov.slearnbackend.exception.NotFoundException;
import ahmetov.slearnbackend.model.course.Course;
import ahmetov.slearnbackend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    @Override
    public List<Course> getAll() {
        return courseRepository.findAll();
    }

    @Override
    public Course getById(Long id) {
        return courseRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Курс не найден"));
    }

    @Override
    @Transactional(rollbackOn = NotFoundException.class)
    public void delete(Long id) {
        Course category = courseRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Категория курса не найдена"));
        courseRepository.delete(category);
    }

    @Override
    @Transactional
    public void update(Course obj) {
        if (obj.getId() != null && courseRepository.findById(obj.getId()).isPresent()) {
            courseRepository.save(obj);
        } else {
            throw new NotFoundException("Лекции не существует");
        }
    }

    @Override
    public void create(Course obj) {
        courseRepository.save(obj);
    }
}
