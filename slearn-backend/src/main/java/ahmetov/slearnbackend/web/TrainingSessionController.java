package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.dao.TrainingSessionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/training-session")
@RequiredArgsConstructor
public class TrainingSessionController {
    private final TrainingSessionRepository trainingSessionRepository;
}
