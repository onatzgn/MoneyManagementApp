import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './Timo.style';
import {useSelector} from 'react-redux';
import {getThemeColor} from '@utils/Color';
import {RootState} from '@redux/Store';
import {Text, Logo} from 'components/Index';
import Images from '@assets/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface InfoPost {
  type: 'info';
  amount: number;
}

interface ContentPost {
  type: 'content';
  title: string;
  content: string;
}
interface QuizPost {
  type: 'quiz';
  question: string;
  options: string[];
  correctAnswer: string;
  successMessage: string;
}

type Post = InfoPost | ContentPost | QuizPost;

export const Timo = () => {
  const theme = useSelector(
    (state: RootState) => state.persistedReducer.theme.theme,
  );
  const themeColors = getThemeColor(theme);

  const user = useSelector(
    (state: RootState) => state.persistedReducer.user.signUp,
  );

  const [posts, setPosts] = useState<Post[]>([
    {type: 'info', amount: 50},
    {
      type: 'content',
      title: 'Para Nedir?',
      content:
        'Para, insanların istedikleri şeyleri almak veya ihtiyaçlarını karşılamak için kullandıkları bir araçtır. Bir marketten şeker almak, oyuncak almak veya sinemaya gitmek için para kullanılır. Paranın değerli olmasının nedeni, onunla neredeyse her şeyi alabilmemizdir. Para, bir takas aracı gibi çalışır; eskiden insanlar ihtiyaçlarını takas yaparak karşılardı, şimdi ise para kullanarak yapıyorlar. Parayı akıllıca kullanmak önemlidir çünkü her zaman sınırlı miktarda olur ve biriktirmek, ilerde daha büyük isteklerimizi gerçekleştirmek için işe yarar.',
    },
    {
      type: 'quiz',
      question: 'Biriktirdiğin parayı nasıl kullanman en mantıklı olur?',
      options: [
        'Tüm parayı hemen harcamak',
        'Bir kısmını harcayıp, geri kalanını biriktirmek',
        'Parayı saklayıp hiç kullanmamak',
        'Başkalarına verip onların kullanmasını sağlamak',
      ],
      correctAnswer: 'Bir kısmını harcayıp, geri kalanını biriktirmek',
      successMessage: 'Tebrikler, doğru cevap!',
    },
  ]);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  const [visibleContentIndex, setVisibleContentIndex] = useState<number | null>(
    null,
  );
  const toggleContentVisibility = (index: number) => {
    setVisibleContentIndex(visibleContentIndex === index ? null : index);
  };

  const handleOptionSelect = (option: string, correctAnswer: string) => {
    if (quizCompleted) return;

    setSelectedOption(option);
    setQuizCompleted(true);

    if (option === correctAnswer) {
      setShowSuccessMessage(true);
    } else {
      setShowSuccessMessage(false);
    }
  };

  return (
    <SafeAreaView
      style={[styles.mainContainer, {backgroundColor: themeColors.background}]}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text
          style={[styles.title, {color: themeColors.budgetTitle}]}
          text="Timo"
        />
        <Text
          style={[styles.staticTitle, {color: themeColors.titleDefault}]}
          text={`Hoşgeldin ${user.fullName}`}
        />

        {posts.map((post, index) => (
          <View
            key={index}
            style={[
              styles.postContainer,
              post.type === 'info'
                ? [styles.infoCard, {backgroundColor: themeColors.infoCard}]
                : post.type === 'content'
                ? [
                    styles.contentCard,
                    {backgroundColor: themeColors.contentCard},
                  ]
                : post.type === 'quiz'
                ? [styles.quizCard, {backgroundColor: themeColors.quizCard}]
                : null,
            ]}>
            <View style={styles.iconContainer}>
              <Image
                source={Images.timoChatIcon}
                style={styles.timoIcon}
                resizeMode="contain"
              />
            </View>
            <View style={styles.categoryIconContainer}>
              <Ionicons
                name={
                  post.type === 'info'
                    ? 'stats-chart'
                    : post.type === 'content'
                    ? 'book'
                    : post.type === 'quiz'
                    ? 'hourglass'
                    : 'alert-circle'
                }
                size={18}
                color="black"
              />
            </View>
            {post.type === 'info' ? (
              <Text text="" style={styles.contentTitle}>
                Şu zamana kadar {post.amount}₺ harcama yaptın!
              </Text>
            ) : post.type === 'content' ? (
              <View>
                <Text text="" style={styles.contentTitle}>
                  {post.title}
                </Text>
                <TouchableOpacity
                  onPress={() => toggleContentVisibility(index)}
                  style={styles.button}>
                  <Text text="İçeriği Oku" style={styles.buttonText} />
                </TouchableOpacity>
                {visibleContentIndex === index && (
                  <Text text="" style={styles.contentText}>
                    {post.content}
                  </Text>
                )}
              </View>
            ) : post.type === 'quiz' ? (
              <View>
                <Text text="" style={styles.contentTitle}>
                  {post.question}
                </Text>
                {post.options.map((option, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.quizOption,
                      selectedOption === option ? styles.selectedOption : {},
                      quizCompleted &&
                      option !== post.correctAnswer &&
                      selectedOption === option
                        ? styles.wrongOption
                        : {},
                      quizCompleted && option === post.correctAnswer
                        ? styles.correctOption
                        : {},
                    ]}
                    onPress={() =>
                      handleOptionSelect(option, post.correctAnswer)
                    }
                    disabled={quizCompleted}>
                    <Text text="" style={styles.optionText}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
                {showSuccessMessage &&
                  selectedOption === post.correctAnswer && (
                    <Text text="" style={styles.successMessage}>
                      {post.successMessage}
                    </Text>
                  )}
                {!showSuccessMessage && quizCompleted && (
                  <Text text="" style={styles.errorMessage}>
                    Doğru cevap: {post.correctAnswer}
                  </Text>
                )}
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
