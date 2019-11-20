import CameraRoll from "@react-native-community/cameraroll";
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

export default class GalleryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localPhotos: [],
            selectedPhotoIndex: 0,
        }
    }

    componentDidMount() {
        this.loadImages();
    }

    loadImages = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(photo => {
                this.setState({ photos: photo.edges });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    onPressAddPhotoBtn = () => {
        this.ActionSheetSelectPhoto.show();
    };

    showActionSheetDelete = index => {
        this.setState({
            selectedPhotoIndex: index
        });
        this.ActionSheetDeletePhoto.show();
    };

    onActionDeleteDone = index => {
        if (index === 0) {
            const array = [...this.state.localPhotos];
            array.splice(this.state.selectedPhotoIndex, 1);
            this.setState({ localPhotos: array });
        }
    };
    onActionSelectPhotoDone = index => {
        switch (index) {
            case 0:
                ImagePicker.openCamera({}).then(image => {
                    this.setState({
                        localPhotos: [...this.state.localPhotos, image]
                    });
                });
                break;
            case 1:
                ImagePicker.openPicker({
                    multiple: true,
                    mediaType: 'photo'
                }).then(images => {
                    images.forEach((image) => {
                        this.setState({
                            localPhotos: [...this.state.localPhotos, image]
                        });
                    });
                }).catch(error => {
                    alert(JSON.stringify(error));
                });
                break;
            default:
                break;
        }
    };

    renderListPhotos = localPhotos => {
        const photos = localPhotos.map((photo, index) => (
            <TouchableOpacity key={index}
                onLongPress={() => {
                    this.showActionSheetDelete(index);
                }}>
                <Image style={styles.photo} source={{ uri: photo.path }} />
            </TouchableOpacity>
        ));

        return photos;
    };

    renderSelectPhotoControl = localPhotos => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Select photos</Text>
                <ScrollView style={styles.photoList} horizontal={true}>
                    {this.renderListPhotos(localPhotos)}
                    <TouchableOpacity onPress={this.onPressAddPhotoBtn.bind(this)}>
                        <View style={[styles.addButton, styles.photo]}>
                            <Text style={styles.addButtonText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    };

    render() {
        return (
            <View>
                {this.renderSelectPhotoControl(this.state.localPhotos)}
                <View style={styles.sectionContainer}>
                    <TouchableOpacity>
                        <Text style={styles.sectionTitle}>Upload now</Text>
                    </TouchableOpacity>
                </View>
                <ActionSheet
                    ref={o => (this.ActionSheetSelectPhoto = o)}
                    title={'Select photo'}
                    options={['Take Photo...', 'Choose from Library...', 'Cancel']}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={1}
                    onPress={index => {
                        this.onActionSelectPhotoDone(index);
                    }}
                />
                <ActionSheet
                    ref={o => (this.ActionSheetDeletePhoto = o)}
                    title={'Confirm delete photo'}
                    options={['Delete', 'Cancel']}
                    cancelButtonIndex={1}
                    destructiveButtonIndex={0}
                    onPress={index => {
                        this.onActionDeleteDone(index);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    addPhotoTitle: {

        fontSize: 15,

        fontWeight: 'bold'
    },
    photoList: {
        height: 70,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 10
    },
    photo: {
        marginRight: 10,
        width: 70,
        height: 70,
        borderRadius: 10
    },

    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3399cc'
    },
    photoIcon: {
        width: 50,
        height: 50
    },
    addButtonContainer: {
        padding: 15,
        justifyContent: 'flex-end'
    },
    addButtonText: {
        fontWeight: 'bold',
        fontSize: 48
    }
});
