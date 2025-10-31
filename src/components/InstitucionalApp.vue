<template>
  <v-row class="mt-3 mb-3">
    <v-col cols="12" md="4">
      <i>
        <v-card
      
        subtitle=""
        text="En la Institución Educativa Santos Abreiro formamos ciudadanos críticos, solidarios y comprometidos con la transformación social. Promovemos una educación democrática que fomenta el pensamiento reflexivo, la justicia social y la participación activa de estudiantes, familias y comunidad, para construir una sociedad más equitativa, consciente y respetuosa de la diversidad."
        title="This is a title"
   color="rgb(14, 75, 112)" 
      > 
      
      <template v-slot:title>
VISIÓN
        </template></v-card>
</i>
    </v-col>

    <v-col cols="12" md="4">
     <i> <v-card
   color="rgb(14, 75, 112)"      >
        <template v-slot:title>
MISIÓN
        </template>

        <template v-slot:subtitle>
        </template>

        <template v-slot:text>
Para el año 2035, la Institución Educativa Santos Abreiro será reconocida como un referente regional en educación sociocrítica, donde los estudiantes sean protagonistas de su aprendizaje, agentes de cambio social y líderes capaces de analizar, cuestionar y transformar la realidad, impulsando el bien común y el desarrollo sostenible en su entorno.        </template>
      </v-card>
</i>

    </v-col>

    <v-col cols="12" md="4">
       <i>
      <v-card
   color="rgb(14, 75, 112)"   
      >
      
        <v-card-item>
          <v-card-title>OBJETIVOS</v-card-title>

          <v-card-subtitle></v-card-subtitle>
        </v-card-item>

        <v-card-text>
Fomentar en los estudiantes el pensamiento crítico y reflexivo frente a las problemáticas sociales, culturales y ambientales.
<br>
Promover la participación democrática, el diálogo y el trabajo colaborativo en toda la comunidad educativa.

<br>
Desarrollar proyectos pedagógicos que articulen la escuela con la realidad social y las necesidades de la comunidad.
<br>
      </v-card-text>
      </v-card>
      </i>


    </v-col>


<v-row class="mt-10 mb-100 d-flex justify-center">
  <v-col cols="12" md="10" lg="18">
    <v-card class="pa-6 timeline-card"     color ="rgb(49, 9, 49)"  theme="dark">
      <v-card-title class="text-h5 mb-2 text-center">
        Línea de Tiempo Institucional
      </v-card-title>
      <v-card-subtitle class="mb-6 text-center">
        Evolución histórica de la Institución Educativa Santos Abreiro
      </v-card-subtitle>

      <v-timeline
       Timeline-side="center" 
       aliggn="start" 
       line-inset="10">

        <!-- 2005 -->
        <v-timeline-item position="start" dot-color="white" icon="mdi-school">
          <template #opposite>2005</template>
          Fundación de la Institución Educativa Santos Abreiro, con el propósito de ofrecer educación integral a la comunidad local.
        </v-timeline-item>

        <!-- 2008 -->
        <v-timeline-item position="end" dot-color="white" icon="mdi-account-group">
          <template #opposite>2008</template>
          Se implementan los primeros proyectos comunitarios y de participación estudiantil, orientados al desarrollo social.
        </v-timeline-item>

        <!-- 2010 -->
        <v-timeline-item position="start" dot-color="white" icon="mdi-lightbulb-on">
          <template #opposite>2010</template>
          Inicio del modelo pedagógico sociocrítico, promoviendo el pensamiento reflexivo, la justicia social y la transformación comunitaria.
        </v-timeline-item>

        <!-- 2013 -->
        <v-timeline-item position="end" dot-color="white" icon="mdi-account-voice">
          <template #opposite>2013</template>
          Creación del Consejo Estudiantil ampliado y mesas de diálogo para decisiones institucionales.
        </v-timeline-item>

        <!-- 2015 -->
        <v-timeline-item position="start" dot-color="white" icon="mdi-home-group">
          <template #opposite>2015</template>
          Programa "Escuela y Comunidad" para integrar a las familias en procesos educativos colaborativos.
        </v-timeline-item>

        <!-- 2018 -->
        <v-timeline-item position="end" dot-color="white" icon="mdi-human-greeting">
          <template #opposite>2018</template>
          Se inaugura el Centro de Innovación y Derechos Humanos: talleres de liderazgo, resolución de conflictos y participación democrática.
        </v-timeline-item>

        <!-- 2020 -->
        <v-timeline-item position="start" dot-color="white" icon="mdi-laptop">
          <template #opposite>2020</template>
          Adaptación al aprendizaje virtual con enfoque crítico, fortaleciendo el trabajo colaborativo y la formación ética en entornos digitales.
        </v-timeline-item>

        <!-- 2022 -->
        <v-timeline-item position="end" dot-color="white" icon="mdi-handshake">
          <template #opposite>2022</template>
          Alianza con organizaciones sociales para proyectos de paz, diversidad e inclusión.
        </v-timeline-item>

        <!-- 2024 -->
        <v-timeline-item position="start" dot-color="white" icon="mdi-star-circle">
          <template #opposite>2024</template>
          Se lanza el programa “Líderes para la Transformación”, donde estudiantes desarrollan proyectos de impacto social en la comunidad.
        </v-timeline-item>

        <!-- 2025 -->
        <v-timeline-item position="end" dot-color="white" icon="mdi-trophy">
          <template #opposite>2025</template>
          Reconocimiento nacional por ser modelo educativo en democracia escolar, equidad y justicia social.
        </v-timeline-item>

      </v-timeline>
    </v-card>
  </v-col>
</v-row>
<!-- 📌 Línea de Tiempo Sociocrítica Animada -->
<v-row class="mt-6 mb-10">
  <v-col cols="12">
    <v-card class="pa-5 timeline-card"   color="rgb(14, 75, 112)"   
 theme="dark">
      <v-card-title class="text-h5 mb-2">
        Línea de Tiempo Futura-Sociocrítica
      </v-card-title>
      <v-card-subtitle class="mb-6">
        Construcción y desarrollo de buen pensamiento crítico para el futuro
      </v-card-subtitle>

      <v-timeline 
      
      aliggn="alternate" side="end" density="comfortable">

        <v-timeline-item
          icon="mdi-lightbulb-on"
          dot-color="white"
          fill-dot
          class="timeline-fade"
                 Timeline-side="center" 
        >
          <template v-slot:opposite>
            <strong>2025</strong>
          </template>
          <v-card class="pa-4">
            <h4>Desarrollo del pensamiento crítico</h4>
            <p>
              Implementación de metodologías activas que fortalecen el análisis reflexivo,
              promoviendo conciencia social y autonomía intelectual.
            </p>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          icon="mdi-account-group"
          dot-color="white"
          fill-dot
          class="timeline-fade"
        >
          <template v-slot:opposite>
            <strong>2027</strong>
          </template>
          <v-card class="pa-4">
            <h4>Democracia escolar fortalecida</h4>
            <p>
              Consolidación del gobierno escolar y participación activa de estudiantes
              en iniciativas institucionales y comunitarias.
            </p>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          icon="mdi-earth"
          dot-color="white"
          fill-dot
          class="timeline-fade"
        >
          <template v-slot:opposite>
            <strong>2030</strong>
          </template>
          <v-card class="pa-4">
            <h4>Alianza escuela–comunidad</h4>
            <p>
              Proyectos sociales, ambientales y culturales con impacto directo en la comunidad local.
            </p>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          icon="mdi-school"
          dot-color="white"
          fill-dot
          class="timeline-fade"
        >
          <template v-slot:opposite>
            <strong>2035</strong>
          </template>
          <v-card class="pa-4">
            <h4>Referente regional sociocrítico</h4>
            <p>
              Reconocimiento regional por formar líderes con pensamiento crítico,
              compromiso social y liderazgo transformador.
            </p>
          </v-card>
        </v-timeline-item>

      </v-timeline>
    </v-card>
  </v-col>
</v-row>



  </v-row>
</template>
<style scoped>
    .v-card {
        border-radius: 12px;
        overflow: hidden;

        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .timeline-card {
  border-radius: 14px;
}

.v-timeline-item {
  font-size: 14px;
  line-height: 1.4;
  opacity: 60%;
}

</style>

