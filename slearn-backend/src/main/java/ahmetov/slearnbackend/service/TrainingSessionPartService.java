package ahmetov.slearnbackend.service;

import ahmetov.slearnbackend.model.course.TrainingSession;
import ahmetov.slearnbackend.model.course.TrainingSessionPart;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface TrainingSessionPartService extends BaseService<TrainingSessionPart, Long> {
    void create(TrainingSessionPart trainingSessionPart, MultipartFile multipartFile);
    List<TrainingSessionPart> getByTrainingSessionId(Long id);
}
