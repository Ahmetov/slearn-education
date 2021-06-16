package ahmetov.slearnbackend.model.course;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false, name = "test_id")
    @JsonIgnore
    private Test test;

    private String question;

    private String rightAnswer;
    private String possibleAnswer2;
    private String possibleAnswer3;
    private String possibleAnswer4;
}
