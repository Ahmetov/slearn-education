package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.dao.TrainingSessionRepository;
import ahmetov.slearnbackend.exception.NotFoundException;
import ahmetov.slearnbackend.model.course.Course;
import ahmetov.slearnbackend.model.course.TrainingSession;
import ahmetov.slearnbackend.service.TrainingSessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingSessionServiceImpl implements TrainingSessionService {

    private final TrainingSessionRepository trainingSessionRepository;

    @Override
    public List<TrainingSession> getAll() {
        return trainingSessionRepository.findAll();
    }

    @Override
    public TrainingSession getById(Long id) {
        return trainingSessionRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Курс не найден"));
    }

    @Override
    @Transactional(rollbackOn = NotFoundException.class)
    public void delete(Long id) {
        TrainingSession category = trainingSessionRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Категория курса не найдена"));
        trainingSessionRepository.delete(category);
    }

    @Override
    @Transactional
    public void update(TrainingSession obj) {
        if (obj.getId() != null && trainingSessionRepository.findById(obj.getId()).isPresent()) {
            trainingSessionRepository.save(obj);
        } else {
            throw new NotFoundException("Лекции не существует");
        }
    }

    @Override
    public void create(TrainingSession obj) {
        trainingSessionRepository.save(obj);
    }

    @Override
    public void create(TrainingSession trainingSession, MultipartFile multipartFile) {
        trainingSessionRepository.save(trainingSession);
    }

    @Override
    public List<TrainingSession> getByCourseId(Long id) {
        return trainingSessionRepository.getAllByCourseId(id);
    }
}
