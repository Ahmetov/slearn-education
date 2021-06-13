package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.dao.TrainingSessionPartRepository;
import ahmetov.slearnbackend.exception.NotFoundException;
import ahmetov.slearnbackend.model.course.TrainingSession;
import ahmetov.slearnbackend.model.course.TrainingSessionPart;
import ahmetov.slearnbackend.service.TrainingSessionPartService;
import ahmetov.slearnbackend.service.TrainingSessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingSessionPartServiceImpl implements TrainingSessionPartService {

    private final TrainingSessionPartRepository trainingSessionPartRepository;

    @Override
    public List<TrainingSessionPart> getAll() {
        return trainingSessionPartRepository.findAll();
    }

    @Override
    public TrainingSessionPart getById(Long id) {
        return trainingSessionPartRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Контент не найден"));
    }

    @Override
    @Transactional(rollbackOn = NotFoundException.class)
    public void delete(Long id) {
        TrainingSessionPart category = trainingSessionPartRepository
                .findById(id)
                .orElseThrow(() -> new NotFoundException("Категория курса не найдена"));
        trainingSessionPartRepository.delete(category);
    }

    @Override
    public void update(TrainingSessionPart obj) {
        if (obj.getId() != null && trainingSessionPartRepository.findById(obj.getId()).isPresent()) {
            trainingSessionPartRepository.save(obj);
        } else {
            throw new NotFoundException("Контента не существует");
        }
    }

    @Override
    public void create(TrainingSessionPart obj) {
        trainingSessionPartRepository.save(obj);
    }

    @Override
    public void create(TrainingSessionPart trainingSessionPart, MultipartFile multipartFile) {
        trainingSessionPartRepository.save(trainingSessionPart);
    }

    @Override
    public List<TrainingSessionPart> getByTrainingSessionId(Long id) {
        return trainingSessionPartRepository.getAllByTrainingSessionId(id);
    }
}
