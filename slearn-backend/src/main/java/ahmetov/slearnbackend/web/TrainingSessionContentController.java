package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.dao.TrainingSessionRepository;
import ahmetov.slearnbackend.model.course.TrainingSession;
import ahmetov.slearnbackend.model.course.TrainingSessionPart;
import ahmetov.slearnbackend.model.dto.TrainingSessionDto;
import ahmetov.slearnbackend.service.TrainingSessionPartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/training-session-content")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class TrainingSessionContentController {

    private final TrainingSessionPartService trainingSessionPartService;
    private final TrainingSessionRepository trainingSessionRepository;

    @PostMapping(path = "/file", consumes = {"multipart/form-data"})
    public void saveImage(
            @RequestPart("trainingSession") TrainingSessionDto trainingSessionDto,
            @RequestParam(name = "file", required = false) MultipartFile file) {
        TrainingSessionPart trainingSessionPart = new TrainingSessionPart();
        trainingSessionPart.setSubtitle(trainingSessionDto.getName());
        trainingSessionPart.setContent(trainingSessionDto.getDescription());
        Optional<TrainingSession> byId = trainingSessionRepository.findById(trainingSessionDto.getCourseId());
        trainingSessionPart.setTrainingSession(byId.get());
        trainingSessionPartService.create(trainingSessionPart, file);
    }

    @GetMapping("/training-session/{id}")
    public List<TrainingSessionPart> getByCourse(@PathVariable Long id) {
        return trainingSessionPartService.getByTrainingSessionId(id);
    }

    @GetMapping()
    public List<TrainingSessionPart> getAll() {
        return trainingSessionPartService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        trainingSessionPartService.delete(id);
    }

    @PutMapping()
    public void update(@RequestBody TrainingSessionPart trainingSession) {
        trainingSessionPartService.update(trainingSession);
    }
}
